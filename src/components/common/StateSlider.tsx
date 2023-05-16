import * as React from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

interface Props {
    title: string,
    children: React.ReactNode,
    onValueChange(value: number): void
}

const StateSlider = ({ title, children, onValueChange }: Props) => {

    const onchange = (event:any, value:any) => {
        onValueChange(value)
    }

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
                color="secondary"
            />
        </Stack>
    );
}

export default StateSlider