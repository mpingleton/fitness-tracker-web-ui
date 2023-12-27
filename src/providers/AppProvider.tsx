import React from "react"
import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

import PrimaryRouter from "../routers/PrimaryRouter"

function AppProvider() {

    const theme = createTheme()

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <PrimaryRouter />
            </ThemeProvider>
        </LocalizationProvider>
    )
}

export default AppProvider