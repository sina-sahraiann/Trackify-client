import * as React from 'react';
import Switch from '@mui/material/Switch';
import NoteIcon from '@mui/icons-material/Note';
import ShortTextIcon from '@mui/icons-material/ShortText';


const SwithAccorCard = ({ onClick }: { onClick: (arg0: boolean) => void }) => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const onclick = (event: any) => {
        onClick(checked)
    }

    return (
        <>
            <div className='flex px-5 gap-x-1'>
                <ShortTextIcon className='self-center text-2xl' />
                <Switch
                    onClick={onclick}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    color='warning'
                />
                <NoteIcon className='self-center text-2xl' />
            </div>
        </>
    )
}




export default SwithAccorCard