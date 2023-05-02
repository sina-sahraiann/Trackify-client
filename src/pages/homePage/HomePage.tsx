import MainLayout from '../../components/layout/main/MainLayout'
import CardNoteHolder from './CardNoteHolder'
import { noteList } from '../../services/AllNotes'
import AllNotes from './AllNotes'
import Header_section from '../../components/common/Header_section'
import SwithAccorCard from '../../components/common/SwithAccorCard'
import { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Modal, TextField, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StateSlider from '../../components/common/StateSlider'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import register from '../../api/register'

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
  const [open, setOpen] = useState(false);
  const [isCard, setIsCard] = useState<boolean>(false)
  const [formState, setFormState] = useState({
    Title: '',
    description: ''
  })
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onChangeTitle = (e: any) => {
    setFormState(
      { ...formState, Title: e.target.value }
    )
  }

  const getChecked = (check: boolean) => {
    setIsCard(check)
  }

  register()

  return (
    <>
      <MainLayout>
        <div>
          <Header_section title='All notes' related='/all' />
          <div className='flex justify-between mb-10'>
            <Button onClick={handleOpen} size='small' variant='contained' color='primary'>
              <span className='md:block hidden mr-3'>Add new note</span>
              <AddCircleIcon />
            </Button>
            <SwithAccorCard onClick={getChecked} />
          </div>
        </div>
        {
          isCard ? <AllNotes noteList={noteList} /> :
            <CardNoteHolder noteList={noteList} />
        }
      </MainLayout>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <div className="flex flex-col gap-8">
              <TextField id="outlined-basic" label="Title" variant="outlined" className='my-4 bg-slate-200 border-0' onChange={onChangeTitle} />
              <TextField multiline={true} id="outlined-basic" minRows={'5'} type={'text'} label="Description" variant="outlined" className='my-4 bg-slate-200 border-0' />
              <StateSlider title='happiness'>
                <InsertEmoticonRoundedIcon />
              </StateSlider>
              <StateSlider title='Health'>
                <HealthAndSafetyIcon/>
              </StateSlider>
              <StateSlider title='Satisfactioon'>
                <ThumbUpOffAltRoundedIcon />
              </StateSlider>
              <Button variant='contained' color='success'>Create note</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default HomePage