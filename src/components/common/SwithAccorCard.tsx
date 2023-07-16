import * as React from 'react';
import Switch from '@mui/material/Switch';



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
        <div className='flex w-16'>
            <Switch
                onClick={onclick}
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
               color='warning'
            />
        </div>
        </>
    )
}




export default SwithAccorCard