import { Box, Button, CircularProgress, TextField } from "@mui/material"
import MainLayout from "../../components/layout/main/MainLayout"
import { useParams } from "react-router"
import { noteList1 } from "../../services/AllNotes"
import StateSlider from "../../components/common/StateSlider"
import useGetNote from "../../hooks/useGetNoteApi"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import useUpdateNote from "../../hooks/useUpdateNote"

let firstTime = true

const UpdateNoteForm = () => {

    const { id } = useParams()
    const [data, gnIsLoading, gnError, gnSuccess] = useGetNote(id)
    const [changed, setChanged] = useState(true)

    interface formValues {
        id?: string;
        title: string;
        text: string;
        happiness: number;
        satisfaction: number;
        health: number;
    }

    //usin react hook form
    const form = useForm<formValues>()
    const { register, control, handleSubmit, formState } = form
    const { errors } = formState

    const [updateNote, unSuccess, unError, unIsLoading] = useUpdateNote()


    
    const onsubmit = (data: formValues) => {
        const dataToSend = {
            id: id,
            title: data.title,
            happiness: data.happiness,
            health: data.health,
            text: data.text,
            satisfaction: data.satisfaction
        }

        updateNote(dataToSend)
    }

    return (
        <>
            <MainLayout>
                <Box className='text-left max-w-screen-lg m-auto'>
                    <form onSubmit={handleSubmit(onsubmit)}>

                        <div className="flex flex-col ">
                            <label htmlFor="first_name" className="block mb-2 text-lg  font-mediumdark:text-white">title</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={data?.title}
                                {...register("title", {
                                    required: "Description shouldn't be empty",
                                })} />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="first_name" className="block mb-2 text-lg  font-mediumdark:text-white">title</label>
                            <textarea id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={data?.text}
                                {...register("text", {
                                    required: "Description shouldn't be empty",
                                })} />
                        </div>
                        <div className='my-7'>
                            <StateSlider title='happiness' formRegister={register} defaultValue={data?.happiness}>
                                <InsertEmoticonRoundedIcon />
                            </StateSlider>
                            <StateSlider title='health' formRegister={register} defaultValue={data?.health}>
                                <HealthAndSafetyIcon />
                            </StateSlider>
                            <StateSlider title='satisfaction' formRegister={register} defaultValue={data?.satisfaction}>
                                <ThumbUpOffAltRoundedIcon />
                            </StateSlider>
                        </div>
                        {unIsLoading && <CircularProgress color="secondary" />}
                        <Button disabled={changed} type="submit" className="w-full mt-8" variant="contained">Update</Button>
                    </form>
                </Box>
            </MainLayout>
            <DevTool control={control} />

        </>
    )
}

export default UpdateNoteForm

