import { Paper, Stack, Typography } from "@mui/material"

function CardioDurationPanel(props: { cardioList: Array<any>, sx?: object }) {

    var value: number = 0
    props.cardioList.forEach(element => {
        value += element.duration
    })

    return (
        <Paper sx={props.sx}>
            <Stack direction="column" padding={4}>
                <Typography variant="h6" textAlign="center">Duration</Typography>
                <Typography variant="h4" textAlign="center">{`${value} sec`}</Typography>
            </Stack>
        </Paper>
    )
}

export default CardioDurationPanel