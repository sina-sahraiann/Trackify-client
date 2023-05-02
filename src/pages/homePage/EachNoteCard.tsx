import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import noteModel from '../../models/note';
import { Masonry } from '@mui/lab';
import EditIcon from '@mui/icons-material/Edit';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PersonalState from '../../components/common/PersonalState';
import { Link } from 'react-router-dom';

const EachNoteCard = ({ id, title, description, date, happiness, health, satisfaction }: noteModel) => {


    return (

        <>
            <Card raised={true} sx={{ backgroundColor: '#F8D353', position: 'relative' }}>
                <CardContent className='text-left' >
                    <div className='flex justify-between'>
                        <div className='mb-10 text-2xl font-bold'>
                            <Typography variant='inherit'>
                                {title}
                            </Typography>
                        </div>
                        <Link to={`${id}`}>view full</Link>
                    </div>

                    <div>
                        <Typography className='truncate truncate-end' variant='body1'>
                            {description}
                        </Typography>
                    </div>

                    <Typography variant='subtitle2' className='absolute bottom-2 left-4'>
                        {date}
                    </Typography>
                    <div className='flex justify-center mt-4'>
                        <PersonalState
                            health={health}
                            happiness={happiness}
                            satisfaction={satisfaction}
                        />
                    </div>
                </CardContent>
                <AttachFileIcon fontSize='medium' className='absolute -top-1 -right-0 opacity-50 rotate-45' />
                <CardActions sx={{ padding: 0 }} className='flex justify-end p-0'>
                    <Button color='error' size="medium">Edit <EditIcon fontSize='small' /></Button>
                </CardActions>
            </Card>

        </>
    );
}

export default EachNoteCard