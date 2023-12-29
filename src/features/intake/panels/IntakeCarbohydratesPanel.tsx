import { Paper, Stack, Typography } from "@mui/material"

function IntakeCarbohydratesPanel(props: { intakeList: Array<any>, sx?: object }) {

    var value:number = 0
    props.intakeList.forEach(element => {
        value += element.carbohydrates
    })

    return (
        <Paper sx={props.sx}>
            <Stack direction="column" padding={4}>
                <Typography variant="h6" textAlign="center">Carbohydrates</Typography>
                <Typography variant="h4" textAlign="center">{`${value} g`}</Typography>
            </Stack>
        </Paper>
    )
}

export default IntakeCarbohydratesPanel