import { Box, Button, CircularProgress, Modal } from "@mui/material";
import { useState } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import useGetNotesBetweenDates from "../../hooks/usegetNotesBetweenDates";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField, DatePicker, DateValidationError, LocalizationProvider } from "@mui/x-date-pickers";
import { useForm } from "react-hook-form";
import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import dayjs, { Dayjs } from "dayjs";
import getAllNotesApiModel from "../../models/apiModel/getAllNotesApiModel";



// '2022-04-17'
const DateFilter = ({ setIsFiltered, isFiltered, getFilteredData, gaSetRetry }:
    {
        setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>,
        isFiltered: boolean,
        getFilteredData: (filteredNotes: getAllNotesApiModel[]) => void,
        gaSetRetry: React.Dispatch<React.SetStateAction<boolean>>
    }) => {

    const defaultDate = dayjs(new Date().toLocaleDateString().replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3"))
    const [start, setStart] = useState<any>(defaultDate);
    const [end, setEnd] = useState<any>(defaultDate);
    const [open, setOpen] = useState(false);
    const [getNotesBetween, data, setData, loading, error, setError, success] = useGetNotesBetweenDates()


    const handleClose = () => {
        setOpen(false);
        setError(null)
    }

    const getCallback = (data: any) => {

        getFilteredData(data)
        handleClose()
        setIsFiltered(true)
    }

    const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        try {
            getNotesBetween({
                endingDate: end?.toISOString(),
                pageNumber: 1,
                pageSize: 999,
                startingDate: start?.toISOString(),
            }, getCallback)

        } catch (error: any) {
            setError(error.message)
            console.log(error.message);
        }
    }



    const onResetHandler = () => {
        setIsFiltered(false)
        gaSetRetry(state => !state)
        setData(null)
        setEnd(defaultDate)
        setStart(defaultDate)
        handleClose()
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Button sx={{
                backgroundColor: isFiltered ? 'blue' : '#FFB200',
                '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                },
            }} size="small" className="ml-9" onClick={() => { setOpen(true) }} variant="contained"><span className="md:block hidden">Filter</span><FilterAltIcon /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <form className="flex flex-col" onSubmit={onSubmitHandler}>
                        {error && <h6 className="text-red-600 text-center mb-3">{error}</h6>}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Starting date"
                                value={start}
                                onChange={(newValue) => { setStart(newValue); setError(null) }}
                                disableFuture
                            />
                            <DatePicker
                                sx={{ marginTop: '1rem' }}
                                label="Ending date"
                                value={end}
                                onChange={(newValue) => { setEnd(newValue); setError(null) }}
                            />
                        </LocalizationProvider>

                        <div className="flex gap-3 w-full mt-4">
                            <Button type="submit" variant="contained" color='secondary'>apply</Button>
                            <Button onClick={onResetHandler} variant="contained" color="info" disabled={!isFiltered}>Reset</Button>
                        </div>
                        {loading && <CircularProgress color="error" />}
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default DateFilter