import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import MainLayout from '../../components/layout/main/MainLayout'
import noteModel from '../../models/note'
import { noteList1 } from '../../services/AllNotes'
import getNoteApi from '../../api/getNoteApi'
import useGetNote from '../../hooks/useGetNoteApi'
import PersonalState from '../../components/common/PersonalState'
import useDeleteNote from '../../hooks/useDeleteNoteApi'

const VIewSingleNote = () => {

    const navigate = useNavigate();
    const { id } = useParams()
    const [note, setnote] = useState(
        noteList1.find(note => note.id === id)
    )

    const [data, gnIsLoading, gnError, gnSuccess] = useGetNote(id)
    const [deleteNote, dnIsLoading, dnError, dnSuccess] = useDeleteNote()

    const onDeleteHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if (id) {
            deleteNote(id)
            setTimeout(() => {
                navigate('/')
            }, 1000)
        }
    }
    return (
        <MainLayout>
            <Box className='text-left max-w-screen-lg m-auto bg-yellow-200 p-14 h-screen'>
                <h1 className='text-3xl'>{data?.title}</h1>
                <p className='text-xl mt-8'>{data?.text}</p>
                <div className='flex justify-center mt-7 mb-4'>
                    <PersonalState
                        health={data?.health}
                        happiness={data?.happiness}
                        satisfaction={data?.satisfaction}
                    />
                </div>
                <div className='flex justify-start mt-11'>
                    <Button style={{ marginRight: '30px' }} color='primary' variant='contained'>Edit</Button>
                    <Button onClick={onDeleteHandler} color='error' variant='contained'>Delete</Button>
                </div>
            </Box>
        </MainLayout>
    )
}

export default VIewSingleNote

