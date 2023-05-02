import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import MainLayout from '../../components/layout/main/MainLayout'
import noteModel from '../../models/note'
import { noteList } from '../../services/AllNotes'

const VIewSingleNote = () => {

    const { id } = useParams()
    const [note, setnote] = useState(
        noteList.find(note => note.id === id)
    )

    return (
        <MainLayout>
            <Box className='text-left'>
                <h3>{note?.date}<h3>
            </Box>
        </MainLayout>
    )
}

export default VIewSingleNote

