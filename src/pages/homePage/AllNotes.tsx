import Box from '@mui/material/Box';
import { Masonry } from '@mui/lab';
import noteModel from '../../models/note';
import EachNote from './EachNote';
import { Modal, Typography } from '@mui/material';
import React from 'react';



const AllNotes = ({ noteList }: { noteList: noteModel[] }) => {



  return (
    <Box>
      <div className='md:hidden'>
        <Masonry columns={1} spacing={2} className='mx-auto'>
          {
            noteList.map(
              (note, index) => (
                <EachNote key={index} {...note} />
              )
            )
          }
        </Masonry>
      </div>
      <div className='hidden md:block'>
        <Masonry columns={2} spacing={2} className='mx-auto'>
          {
            noteList.map(
              (note, index) => (
                <EachNote key={index} {...note} />
              )
            )
          }
        </Masonry>
      </div>
    </Box>
  );
}

export default AllNotes