import { Paper, Accordion, AccordionSummary, AccordionDetails, Typography, AccordionActions, Button } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import noteModel from '../../models/note';
import PersonalState from '../../components/common/PersonalState';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';



const EachNote = ({ id, title, text, date, happiness, health, satisfaction
}: noteModel) => {

  const [isVisible, setIsVisible] = useState(false)

  const onMouseEnterHandler = () => {
      setIsVisible(true)
  }

  const onMouseLeaveHandler = () => {
      setIsVisible(false)
  }


  return (
    <>
      <Paper onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
        <Accordion sx={{ backgroundColor: '#FFB93E', position: 'relative', minHeight: '100px' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className='flex justify-between mb-2'>
              <div className='flex align-center'>
                <div className='text-2xl font-bold'>
                  {title}
                </div>
                <Link className={`self-end ms-1 transition-all opacity-70 ${isVisible ? ' ' : 'hidden '}`} to={`updateNotes/${id}`}><EditIcon fontSize='small' /></Link>
                <Link to={`${id}`}  className={`self-end ms-1 transition-all opacity-70 ${isVisible ? ' ' : 'hidden '}`}><RemoveRedEyeIcon/></Link>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{paddingTop : '0'}} className='text-left'>
            <Typography>
              {text}
            </Typography>
            <div className='flex justify-center'>
              <PersonalState
                health={health}
                happiness={happiness}
                satisfaction={satisfaction}
              />
            </div>
            <div className='mt-4 opacity-90'>
              {date}
            </div>

          </AccordionDetails>
        </Accordion>
      </Paper>
    </>
  )
}


export default EachNote
