import { Masonry } from '@mui/lab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import EachNoteCard from './EachNoteCard';
import noteModel from '../../models/note';

const CardNoteHolder = ({ noteList ,forcedRerender}: { noteList: noteModel[] ,forcedRerender: () => void}) => {
    return (
        <>
            <div className='md:hidden'>
                <Masonry columns={1} spacing={3} >
                    {
                        noteList.map(
                            (note, index) => (
                                <EachNoteCard forcedRerender={forcedRerender}  {...note} key={`eachnotecard${index}`}/>
                            )
                        )
                    }
                </Masonry>
            </div>
            <div className='hidden md:block lg:hidden' >
                <Masonry columns={2} spacing={3} >
                    {
                        noteList.map(
                            (note, index) => (
                                <EachNoteCard forcedRerender={forcedRerender} {...note} key={`eachnotecardmdblock${index}`}/>
                            )
                        )
                    }
                </Masonry>
            </div>
            <div className='hidden xl:hidden lg:block'>
                <Masonry columns={3} spacing={3} >
                    {
                        noteList.map(
                            (note, index) => (
                                <EachNoteCard forcedRerender={forcedRerender} {...note} key={`eachnotecardmdblock${index}`}/>
                            )
                        )
                    }
                </Masonry>
            </div>
            <div className='hidden xl:block'>
                <Masonry columns={4} spacing={3} >
                    {
                        noteList.map(
                            (note, index) => (
                                <EachNoteCard forcedRerender={forcedRerender} {...note} key={`eachnotecardmdblock${index}`}/>
                            )
                        )
                    }
                </Masonry>
            </div>
        </>
    );
}

export default CardNoteHolder