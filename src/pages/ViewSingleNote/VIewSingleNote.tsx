import { Box, Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import MainLayout from '../../components/layout/main/MainLayout'
import noteModel from '../../models/note'
import { noteList1 } from '../../services/AllNotes'
import getNoteApi from '../../api/getNoteApi'
import useGetNote from '../../hooks/useGetNoteApi'
import PersonalState from '../../components/common/PersonalState'
import useDeleteNote from '../../hooks/useDeleteNoteApi'
import { ModalContext, ModalContextType } from '../../providers/globalModalProvider'
import UpdateNoteForm from '../updateNote/UpdateNoteForm'
import { useSnackbar } from 'notistack'

const VIewSingleNote = ({noteId} : {noteId : string}) => {

    const [data, gnIsLoading, gnError, gnSuccess] = useGetNote(noteId)
    const [deleteNote, dnIsLoading, dnError, dnSuccess] = useDeleteNote()
    const { addModal , removeModal } = useContext(ModalContext) as ModalContextType
    const {enqueueSnackbar} = useSnackbar()

    const onDeleteHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
            deleteNote(noteId)
            removeModal(noteId)
    }

    const openEditHandler = () => {
            addModal(<UpdateNoteForm noteId={noteId} />, noteId)
    }

    return (
            <Box className='text-left m-auto bg-yellow-200 p-5'>
                <h1 className='text-3xl'>{data?.title}</h1>
                <p className='text-xl mt-8 break-words'>{data?.text}</p>
                <div className='flex justify-center mt-7'>
                    <PersonalState
                        health={data?.health}
                        happiness={data?.happiness}
                        satisfaction={data?.satisfaction}
                    />
                </div>
                <div className='flex justify-start mt-14'>
                    <Button onClick={openEditHandler} style={{ marginRight: '30px' }} color='primary' variant='contained'>Edit</Button>
                    <Button onClick={onDeleteHandler} color='error' variant='contained'>Delete</Button>
                </div>
            </Box>
    )
}

export default VIewSingleNote

