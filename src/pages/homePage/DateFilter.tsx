import { Box, Button, CircularProgress, Modal } from "@mui/material";
import { useState } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import useGetNotesBetweenDates from "../../hooks/usegetNotesBetweenDates";

const DateFilter = () => {
    const [value, setValue] = useState(null);
    const [open, setOpen] = useState(false);
    const [getNotesBetween, loading, error, success] = useGetNotesBetweenDates()

    const handleClose = () => {
        setOpen(false);
    }

    const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        console.log('sina');

        getNotesBetween({
            endingDate: new Date().toISOString(),
            pageNumber: 1,
            pageSize: 999,
            startingDate: new Date().toISOString(),
        })
        console.log(success);

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
                backgroundColor: '#FFB200',
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
                    <form onSubmit={onSubmitHandler}>
                        <Button type="submit">apply</Button>
                        {loading && <CircularProgress color="error" />}
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default DateFilter