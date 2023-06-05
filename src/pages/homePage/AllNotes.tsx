import Box from '@mui/material/Box';
import { Masonry } from '@mui/lab';
import noteModel from '../../models/note';
import EachNote from './EachNote';
import { Modal, Typography } from '@mui/material';
import { resolve } from 'path';
import { noteList } from '../../services/AllNotes';
import { useState } from 'react';
import loginApi from '../../api/loginApi';
import register from '../../api/loginApi';




const AllNotes = ({ noteList }: { noteList: noteModel[] }) => {

  const [state, setState] = useState(0)

  return (
    <Box>
      <div className='md:hidden'>
        <Masonry columns={1} spacing={2} className='mx-auto'>
          {
            noteList.map(
              (note, index) => (
                <EachNote key={`Eachnote${index}`} {...note} />
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
                <EachNote key={`Eachnotemdblock${index}`} {...note} />
              )
            )
          }
        </Masonry>
      </div>
    </Box>
  );
}

export default AllNotes