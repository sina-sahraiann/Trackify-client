import * as React from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import { useState } from 'react';

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
    formRegister: UseFormRegister<formValues>,
    defaultValue?: number
}

const StateSlider = ({ title, children, formRegister, defaultValue }: Props) => {

    // const onchange = (event: any, value: any) => {
    //     onValueChange(value)
    // }
    const [isDefault, setIsDefault] = useState(defaultValue)

    return (
        <Stack>
            <Typography variant='subtitle2'>{children} <span className='relative top-0.5'>{title}</span> </Typography>
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