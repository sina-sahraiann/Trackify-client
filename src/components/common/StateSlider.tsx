import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

function valuetext(value: number) {
    return `${value}°C`;
}

const onchange = (e:any) => {
    console.log(e.target.value);

}

interface Props {
    title: string;
    children: React.ReactNode
}

const StateSlider = ({ title, children }: Props) => {
    return (
        <Stack>
            <Typography variant='subtitle2'>{children}{title}</Typography>
            <Slider
            size='small'
                onChange={onchange}
                min={0}
                max={100}
                aria-label="Temperature"
                defaultValue={50}
                getAriaValueText={valuetext}
                color="secondary"
            />
        </Stack>
    );
}

export default StateSlider