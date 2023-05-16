import { Paper, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import noteModel from '../../models/note';
import PersonalState from '../../components/common/PersonalState';



const EachNote = ({ title, description, date, happiness, health, satisfaction
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
            {description}
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
      </Accordion>
    </Paper>
  </>
)


export default EachNote
