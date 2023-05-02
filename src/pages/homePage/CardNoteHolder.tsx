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
                                <EachNoteCard
                                    key={note.id + index}
                                    id={note.id}
                                    title={note.title}
                                    description={note.description}
                                    date={note.date}
                                    happiness={note.happiness}
                                    satisfaction={note.satisfaction}
                                    health={note.health}
                                />
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
                                <EachNoteCard
                                    key={index}
                                    id={note.id}
                                    title={note.title}
                                    description={note.description}
                                    date={note.date}
                                    happiness={note.happiness}
                                    satisfaction={note.satisfaction}
                                    health={note.health}
                                />
                            )
                        )
                    }
                </Masonry>
            </div>
        </>
    );
}

export default CardNoteHolder