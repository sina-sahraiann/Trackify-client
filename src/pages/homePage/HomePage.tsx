import MainLayout from '../../components/layout/main/MainLayout'
import CardNoteHolder from './CardNoteHolder'
import AllNotes from './AllNotes'
import Header_section from '../../components/common/Header_section'
import SwithAccorCard from '../../components/common/SwithAccorCard'
import { useContext, useState } from 'react'
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
import axios from 'axios'
import { noteList1 } from '../../services/AllNotes'
import { useNavigate } from 'react-router'
import useNoteSearch from '../../hooks/useSearch'
import getAllNotesApiModel from '../../models/apiModel/getAllNotesApiModel'
import DateFilter from './DateFilter'
import useGetUser from '../../hooks/useGetUser'
import { UserContext, UserContextProps } from '../../providers/UserProvider'
import StreakCard from '../../components/common/StreakCard'

const style = {
  position: 'absolute' as 'absolute',
  top: '60%',
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
  const [notesData, gaIsLoading, gaError, gaSuccess, gaSetRetry] = useGetAllNotes()
  const [open, setOpen] = useState(false);
  const [isCard, setIsCard] = useState<boolean>(false)
  const navigate = useNavigate()
  const { user } = useContext(UserContext) as UserContextProps


  interface formValues {
    title: string
    text: string
    happiness: number
    satisfaction: number
    health: number
  }

  const [notesFound, searchInput, handleSearchInputChange, resetSearchInput] = useNoteSearch(notesData)


  //usin react hook form
  const form = useForm<formValues>()
  const { register, control, handleSubmit, formState } = form
  const { errors } = formState

  //using create note custom hook
  const [createNote, cnLoading, cnError, cnSuccess] = useCreateNewNote();

  const onsubmit = (data: formValues) => {
    const dataToSend: formValues = {
      title: data.title,
      happiness: data.happiness,
      health: data.health,
      text: data.text,
      satisfaction: data.satisfaction
    }

    createNote(dataToSend)
    gaSetRetry(prevState => !prevState)
    handleClose()
    resetSearchInput()
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false);


  const getChecked = (check: boolean) => {
    setIsCard(check)
  }

  const renderNotes = () => {
    if (searchInput === '') {
      return notesData ?
        isCard ?
          <AllNotes noteList={notesData} /> :
          <CardNoteHolder noteList={notesData} /> :
        <LoadingSkeleton />
    } else {
      return notesFound ?
        isCard ?
          <AllNotes noteList={notesFound} /> :
          <CardNoteHolder noteList={notesFound} /> :
        <LoadingSkeleton />
    }
  }

  return (
    <>
      <MainLayout>
        <div>
          <div className='flex justify-between py-5'>
            <Header_section title='All notes' related='/all' />
            {user && <StreakCard journalingStreak={user.journalingStreak} />}
          </div>
          <div className='flex justify-between mb-10'>
            <div className='flex '>
              <Button onClick={handleOpen} size='small' variant='contained' sx={{
                backgroundColor: '#FFB200',
                marginRight: '10px',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'black',
                },
              }}>

                <span className='md:block hidden mr-3'>Create new note</span>
                <AddCircleIcon />
              </Button>
              <DateFilter />
              <input
                type="text"
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder="Search..."
                className="mx-5 px-4 py-2 rounded-md bg-gray-200 focus:bg-white focus:outline-none"
              />
            </div>
            <div className='flex'>
              <SwithAccorCard onClick={getChecked} />
            </div>
          </div>
        </div>
        {
          renderNotes()
        }
      </MainLayout>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={
          {
            top: '10%',
            position: 'absolute',
            overflow: 'scroll',
            height: '100%',
            display: 'block'
          }
        }
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onsubmit)} noValidate>
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
      <DevTool control={control} />
    </>
  )
}

export default HomePage
