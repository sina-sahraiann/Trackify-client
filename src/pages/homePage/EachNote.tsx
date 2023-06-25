import { Paper, Accordion, AccordionSummary, AccordionDetails, Typography, AccordionActions, Button } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import noteModel from '../../models/note';
import PersonalState from '../../components/common/PersonalState';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';



const EachNote = ({ id, title, text, date, happiness, health, satisfaction
}: noteModel) => (
  <>
    <Paper>
      <Accordion sx={{ backgroundColor: '#F8D353', position: 'relative', minHeight: '100px' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className='flex justify-between'>
            <div className='text-2xl font-semibold'>{title}</div>
          </div>
        </AccordionSummary>
        <AccordionDetails className='text-left'>
          <Typography>
            {text}
          </Typography>
          <div className='flex justify-center mt-4'>
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
        <AccordionActions sx={{ padding: 0 }} className='flex justify-end p-0'>
          <Link to={`updateNotes/${id}`}>Edit <EditIcon fontSize='small' /></Link>
        </AccordionActions>
      </Accordion>
    </Paper>
  </>
)


export default EachNote
