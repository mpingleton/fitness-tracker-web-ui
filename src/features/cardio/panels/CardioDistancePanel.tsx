import { Paper, Stack, Typography } from "@mui/material"

function CardioDistancePanel(props: { cardioList: Array<any>, sx?: object }) {

    var value: number = 0
    props.cardioList.forEach(element => {
        value += element.distance
    })

    return (
        <Paper sx={props.sx}>
            <Stack direction="column" padding={4}>
                <Typography variant="h6" textAlign="center">Distance</Typography>
                <Typography variant="h4" textAlign="center">{`${value} mi`}</Typography>
            </Stack>
        </Paper>
    )
}

export default CardioDistancePanel