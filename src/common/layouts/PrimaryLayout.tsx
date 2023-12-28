import React from "react"
import { useNavigate } from "react-router-dom"
import {
    Box,
    AppBar,
    Toolbar,
    Stack,
    Typography,
    Button
} from "@mui/material"

function PrimaryLayout(props: { title: string, content: any, modals?: any }) {
    const navigate = useNavigate()
    document.title = "Fitness Tracker - " + props.title

    const AppBarLeft = (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start'
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={2}
            >
                <Typography
                    variant="h5"
                    color="inherit"
                >
                    Fitness Tracker
                </Typography>
                <Typography
                    variant="h6"
                    color="inherit"
                >
                    {props.title}
                </Typography>
            </Stack>
        </Box>
    )

    const AppBarRight = (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end'
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={2}
            >
                <Button color="inherit" variant="text" disableElevation onClick={() => {}}>Logout</Button>
            </Stack>
        </Box>
    )

    const AppBarCenter = (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
            >
                <Button color="inherit" variant="text" disableElevation onClick={() => navigate('/intake')}>Nutritional Intake</Button>
                <Button color="inherit" variant="text" disableElevation onClick={() => navigate('/cardio')}>Cardio Excercise</Button>
                <Button color="inherit" variant="text" disableElevation onClick={() => navigate('/strength')}>Strength Training</Button>
                <Button color="inherit" variant="text" disableElevation onClick={() => navigate('/weight')}>Weight Measurements</Button>
                <Button color="inherit" variant="text" disableElevation onClick={() => navigate('/bloodpressure')}>Blood Pressure Measurements</Button>
            </Stack>
        </Box>
    )

    const MainAppBar = (
        <AppBar position="static" sx={{ zIndex: 1 }}>
            <Toolbar>
                {AppBarLeft}
                {AppBarCenter}
                {AppBarRight}
            </Toolbar>
        </AppBar>
    )

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
                height: "100vh",
            }}
        >
            {props.modals}
            {MainAppBar}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'clip'
                }}
            >
                <Box overflow='scroll' sx={{ width: '100%' }}>{props.content}</Box>
            </Box>
        </Box>
    )
}

export default PrimaryLayout