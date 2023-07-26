import { Box, Typography } from "@mui/material"
import React from "react"


const Header_section = ({ title, related, related2 }: { title: string, related?: string, related2?: string }) => {
    return (
        <React.Fragment>
            <Box className="text-left md:self-center opacity-90">
                <h5 className="text-4xl inline-block">{title}</h5>
                <h5 className="text-3xl inline-block">{related}</h5>
                <h5 className="text-3xl inline-block">{related2}</h5>
            </Box>
        </React.Fragment>
    )
}

export default Header_section