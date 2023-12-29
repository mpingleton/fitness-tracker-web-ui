import { Paper, Stack, Typography } from "@mui/material"

function IntakeProteinPanel(props: { intakeList: Array<any>, sx?: object }) {

    var value:number = 0
    props.intakeList.forEach(element => {
        value += element.protein
    })

    return (
        <Paper sx={props.sx}>
            <Stack direction="column" padding={4}>
                <Typography variant="h6" textAlign="center">Protein</Typography>
                <Typography variant="h4" textAlign="center">{`${value} g`}</Typography>
            </Stack>
        </Paper>
    )
}

export default IntakeProteinPanel