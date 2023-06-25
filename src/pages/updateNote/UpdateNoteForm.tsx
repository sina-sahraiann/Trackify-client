import { Box, TextField } from "@mui/material"
import MainLayout from "../../components/layout/main/MainLayout"
import { useParams } from "react-router"
import { noteList1 } from "../../services/AllNotes"
import StateSlider from "../../components/common/StateSlider"


const UpdateNoteForm = () => {

    const { id } = useParams()
    const [note, setnote] = useState(
        noteList1.find(note => note.id === id)
    )

    return (
        <>
            <MainLayout>
                <Box className='text-left max-w-screen-lg m-auto'>
                    <form>
                        <TextField id="outlined-basic" label="Title" variant="outlined" className='my-4 bg-slate-200 border-0' defaultValue={note?.title} />
                        <TextField multiline={true} id="outlined-basic" minRows={'5'} type={'text'} label="Description" variant="outlined" className='my-4 bg-slate-200 border-0' defaultValue={note?.description} />
                         {/* <StateSlider title='happiness'>
                            <InsertEmoticonRoundedIcon />
                        </StateSlider>
                        <StateSlider title='health'>
                            <HealthAndSafetyIcon />
                        </StateSlider>
                        <StateSlider title='satisfaction'>
                            <ThumbUpOffAltRoundedIcon />
                        </StateSlider> */}
                    </form>
                </Box>
            </MainLayout>
        </>
    )
}

export default UpdateNoteForm

function useState(arg0: any): [any, any] {
    throw new Error("Function not implemented.")
}
