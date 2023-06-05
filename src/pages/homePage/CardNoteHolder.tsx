import { Masonry } from '@mui/lab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import EachNoteCard from './EachNoteCard';
import noteModel from '../../models/note';

const CardNoteHolder = ({ noteList }: { noteList: noteModel[] }) => {
    return (
        <>
            <div className='md:hidden'>
                <Masonry columns={1} spacing={3} >
                    {
                        noteList.map(
                            (note, index) => (
                                <EachNoteCard {...note} key={`eachnotecard${index}`}/>
                            )
                        )
                    }
                </Masonry>
            </div>
            <div className='hidden md:block'>
                <Masonry columns={2} spacing={3} >
                    {
                        noteList.map(
                            (note, index) => (
                                <EachNoteCard {...note} key={`eachnotecardmdblock${index}`}/>
                            )
                        )
                    }
                </Masonry>
            </div>
        </>
    );
}

export default CardNoteHolder