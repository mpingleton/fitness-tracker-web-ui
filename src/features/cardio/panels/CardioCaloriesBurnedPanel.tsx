import { Paper, Stack, Typography } from "@mui/material"

function CardioCaloriesBurnedPanel(props: { cardioList: Array<any>, sx?: object }) {

    var value: number = 0
    props.cardioList.forEach(element => {
        value += element.caloriesBurned
    })

    return (
        <Paper sx={props.sx}>
            <Stack direction="column" padding={4}>
                <Typography variant="h6" textAlign="center">Calories Burned</Typography>
                <Typography variant="h4" textAlign="center">{`${value} cal`}</Typography>
            </Stack>
        </Paper>
    )
}

export default CardioCaloriesBurnedPanel