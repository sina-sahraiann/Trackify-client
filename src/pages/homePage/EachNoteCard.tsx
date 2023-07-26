import * as React from 'react';
import { useState, useContext } from 'react'
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
import classes from './card.module.css'
import { ModalContext, ModalContextType } from '../../providers/globalModalProvider';
import VIewSingleNote from '../ViewSingleNote/VIewSingleNote';
import UpdateNoteForm from '../updateNote/UpdateNoteForm';

interface eachNoteCardModel extends noteModel {
    forcedRerender: () => void
}  

const EachNoteCard = ({ id, title, text, date, happiness, health, satisfaction ,forcedRerender}: eachNoteCardModel ) => {

    const [isVisible, setIsVisible] = useState(false)
    const { addModal, removeModal } = useContext(ModalContext) as ModalContextType

    const onMouseEnterHandler = () => {
        setIsVisible(true)
    }

    const onMouseLeaveHandler = () => {
        setIsVisible(false)
    }

    const openViewModalHandler = () => {
        if (id) {
            addModal(<VIewSingleNote forcedRerender={forcedRerender} noteId={id} />, id)
        }
    }

    const openEditHandler = () => {
        if (id) {
            addModal(<UpdateNoteForm forcedRerender={forcedRerender} noteId={id} />, id)
        }
    }

    return (

        <>
            <div className={classes.article} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} >
                <CardContent sx={{ padding: '0' }} className='text-left' >
                    <div className='flex justify-between mb-5'>
                        <div className='flex align-center'>
                            <div className='text-2xl font-bold'>
                                {title}
                            </div>
                            <button onClick={openEditHandler} className={`self-end ms-1 transition-all opacity-75 hover:opacity-100 hover:font-extrabold ${isVisible ? ' ' : 'hidden '}`} ><EditIcon fontSize='small' /></button>
                        </div>
                    </div>
                    <div>
                        <Typography className='truncate' variant='body1'>
                            {text}
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
                <div className='flex justify-end m-3 translate-x-5 translate-y-3 mt-5 mb-0 opacity-75 hover:opacity-100 h-6'>
                    <button onClick={openViewModalHandler} className={`text-xs p-2 self-center text-white bg-black rounded-lg ${isVisible ? ' ' : 'hidden '}`}>view full</button>
                </div>
            </div>

        </>
    );
}



export default EachNoteCard