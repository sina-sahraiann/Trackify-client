import * as React from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';

interface formValues {
    title: string
    text: string
    happiness: number
    satisfaction: number
    health: number
}

interface Props {
    title: "happiness" | "satisfaction" | "health" | "text" | "text",
    children: React.ReactNode,
    formRegister: UseFormRegister<formValues>
}

const StateSlider = ({ title, children,  formRegister }: Props) => {

    // const onchange = (event: any, value: any) => {
    //     onValueChange(value)
    // }

    return (
        <Stack>
            <Typography variant='subtitle2'>{children}{title}</Typography>
            <Slider
                {...formRegister(title)}
                size='small'
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