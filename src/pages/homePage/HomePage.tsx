import MainLayout from '../../components/layout/main/MainLayout'
import CardNoteHolder from './CardNoteHolder'
import AllNotes from './AllNotes'
import Header_section from '../../components/common/Header_section'
import SwithAccorCard from '../../components/common/SwithAccorCard'
import { useContext, useEffect, useState } from 'react'
import { Box, Button, CircularProgress, Modal, Skeleton, Stack, TextField } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StateSlider from '../../components/common/StateSlider'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import useCreateNewNote from '../../hooks/useCreateNewNoteApi'
import LoadingSkeleton from './LoadingSkeleton'
import useGetAllNotes from '../../hooks/useGetAllNotesApi'
import axios, { AxiosResponse } from 'axios'
import { noteList1 } from '../../services/AllNotes'
import { useNavigate } from 'react-router'
import useNoteSearch from '../../hooks/useSearch'
import getAllNotesApiModel from '../../models/apiModel/getAllNotesApiModel'
import DateFilter from './DateFilter'
import useGetUser from '../../hooks/useGetUser'
import { UserContext, UserContextProps } from '../../providers/UserProvider'
import StreakCard from '../../components/common/StreakCard'
import { ModalContext, ModalContextType } from '../../providers/globalModalProvider'
import NoteApi from "../../services/api/NoteApi";
import { useSnackbar } from '../../providers/globalSnackBarProvider'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const HomePage = () => {

  //get all note custom hook api
  const [notesData, setNotesData, gaIsLoading, gaError, gaSuccess, gaSetRetry] = useGetAllNotes()
  const [open, setOpen] = useState(false);
  const [isCard, setIsCard] = useState<boolean>(false)
  const { user } = useContext(UserContext) as UserContextProps
  const [noteJsx, setNoteJsx] = useState<JSX.Element | null>(null)
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState<getAllNotesApiModel[] | null>(null)
  const [notesFound, foundFilteredNotes, searchInput, handleSearchInputChange, resetSearchInput] = useNoteSearch(notesData, filteredNotes)
  const [cnLoading, setLoading] = useState<boolean>(false);
  const { addSnackbar } = useSnackbar();
  const [rerender, setRerender] = useState<boolean>(true)

  const forcedRerender = async  () => {
     gaSetRetry(state => !state)
    //  setTimeout(() => {
    //   setRerender(state => !state)
    //  },2000)
  }

  interface formValues {
    title: string
    text: string
    happiness: number
    satisfaction: number
    health: number
  }

  //usin react hook form
  const form = useForm<formValues>()
  const { register, control, handleSubmit, formState, setValue } = form
  const { errors } = formState

  //using create note custom hook
  // const [createNote, cnLoading, cnError, cnSuccess] = useCreateNewNote();

  const onsubmit = async (data: formValues) => {

    try {
      const dataToSend: formValues = {
        title: data.title,
        happiness: data.happiness,
        health: data.health,
        text: data.text,
        satisfaction: data.satisfaction
      }

      setLoading(true);
      // createNote(dataToSend)
      const response = await NoteApi.create(dataToSend)
      console.log(response?.data);

      setLoading(false);

      gaSetRetry(prevState => !prevState)
      handleClose()
      resetSearchInput()
      setIsFiltered(false)

      setValue('title', '')
      setValue('text', '')
    }
    catch (err) {
      console.log(err);
      addSnackbar("An error occurred during creating the note", "error");
    }
  }

  const getFilteredData = (filteredNotes: getAllNotesApiModel[]) => {
    setFilteredNotes(filteredNotes)
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false);

  const getChecked = (check: boolean) => {
    setIsCard(check)
  }

  const renderNotes = () => {
    if (isFiltered) {
      if (!filteredNotes) {
        return <h1>no notes found</h1>
      }
      if (searchInput === '') {
        return filteredNotes ?
          isCard ?
            <AllNotes forcedRerender={forcedRerender} noteList={filteredNotes} /> :
            <CardNoteHolder forcedRerender={forcedRerender} noteList={filteredNotes} /> :
          <LoadingSkeleton />
      } else {
        return foundFilteredNotes ?
          isCard ?
            <AllNotes forcedRerender={forcedRerender} noteList={foundFilteredNotes} /> :
            <CardNoteHolder forcedRerender={forcedRerender} noteList={foundFilteredNotes} /> :
          <LoadingSkeleton />
      }
    } else {
      if (searchInput === '') {
        return notesData ?
          isCard ?
            <AllNotes forcedRerender={forcedRerender} noteList={notesData} /> :
            <CardNoteHolder forcedRerender={forcedRerender} noteList={notesData} /> :
          <LoadingSkeleton />
      } else {
        return notesFound ?
          isCard ?
            <AllNotes forcedRerender={forcedRerender} noteList={notesFound} /> :
            <CardNoteHolder forcedRerender={forcedRerender} noteList={notesFound} /> :
          <LoadingSkeleton />
      }
    }
  }

  useEffect(() => {


    window.addEventListener('error', e => {
      if (e.message === 'ResizeObserver loop limit exceeded') {
        const resizeObserverErrDiv = document.getElementById(
          'webpack-dev-server-client-overlay-div'
        );
        const resizeObserverErr = document.getElementById(
          'webpack-dev-server-client-overlay'
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute('style', 'display: none');
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute('style', 'display: none');
        }
      }
    });
  }, []);

  useEffect(() => {
    setNoteJsx(renderNotes())
    console.log(renderNotes().props.noteList);

  }, [notesData, isCard, notesFound, isFiltered, filteredNotes, foundFilteredNotes, rerender])

  return (
    <>
      <MainLayout>
        <div>
          <div className='flex flex-col md:flex-row md:justify-between py-5'>
            <Header_section title='Notes' related={!isFiltered ? '/all' : '/filtered'} />
            {user && <StreakCard journalingStreak={user.journalingStreak} />}
          </div>
          <div className='flex-col-reverse flex sm:flex-row md:justify-between mb-10'>
            <div className='flex flex-wrap gap-y-4 gap-x-3'>
              <Button onClick={handleOpen} size='small' variant='contained' sx={{
                backgroundColor: '#FFB200',

                '&:hover': {
                  backgroundColor: 'white',
                  color: 'black',
                },
              }}>

                <span className='md:block hidden mr-3'>Create new note</span>
                <AddCircleIcon />
              </Button>
              <DateFilter setIsFiltered={setIsFiltered}
                isFiltered={isFiltered}
                getFilteredData={getFilteredData}
                gaSetRetry={gaSetRetry}
              />
              <input
                type="text"
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder="Search..."
                className=" px-4 py-2 rounded-md bg-gray-200 focus:bg-white focus:outline-none"
              />
            </div>
            <div className='flex mb-2 md:mb-0'>
              <SwithAccorCard onClick={getChecked} />
            </div>
          </div>
        </div>
        {
          noteJsx
        }
      </MainLayout>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={
          {
            top: '0',
            position: 'absolute',
            overflow: 'scroll',
            height: '100%',
            display: 'block'
          }
        }
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onsubmit)} className='sm:p-0 p-4' noValidate>
            <div className="flex flex-col gap-8">
              <TextField id="outlined-basic" label="Title" variant="outlined" className='my-4 bg-slate-200 border-0'
                {...register("title", {
                  required: "Title shouldn't be empty",
                })}
              />
              <TextField multiline={true} id="outlined-basic" minRows={'5'} type={'text'} label="Description" variant="outlined" className='my-4 bg-slate-200 border-0'
                {...register("text", {
                  required: "Description shouldn't be empty",
                })}
              />
              <StateSlider title='happiness' formRegister={register}>
                <InsertEmoticonRoundedIcon />
              </StateSlider>
              <StateSlider title='health' formRegister={register}>
                <HealthAndSafetyIcon />
              </StateSlider>
              <StateSlider title='satisfaction' formRegister={register}>
                <ThumbUpOffAltRoundedIcon />
              </StateSlider>
              <div className='flex justify-center'>
                {cnLoading && <CircularProgress color="secondary" />}
              </div>
              <Button disabled={!formState.isValid} variant='contained' color='success' type='submit' >
                Create note
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default HomePage
