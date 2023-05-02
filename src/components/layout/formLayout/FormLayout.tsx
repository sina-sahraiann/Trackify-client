import { Box } from '@mui/material'
import { url } from 'inspector'
import React from 'react'
import bgImage from "../../../assets/images/blurry-gradient-haikei.svg";

const FormLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center' }}>
            {children}
        </Box>
    )
}

export default FormLayout