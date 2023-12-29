import { Paper, Stack, Typography } from "@mui/material"

function IntakeCaloriesPanel(props: { intakeList: Array<any>, sx?: object }) {

    var value:number = 0
    props.intakeList.forEach(element => {
        value += element.calories
    })

    return (
        <Paper sx={props.sx}>
            <Stack direction="column" padding={4}>
                <Typography variant="h6" textAlign="center">Calories</Typography>
                <Typography variant="h4" textAlign="center">{`${value} cal`}</Typography>
            </Stack>
        </Paper>
    )
}

export default IntakeCaloriesPanel