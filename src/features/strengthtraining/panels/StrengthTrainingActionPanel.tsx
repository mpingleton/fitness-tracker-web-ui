import { Add } from "@mui/icons-material"
import { Paper, Stack, Button } from "@mui/material"

function StrengthTrainingActionPanel(props: { onClickNew: Function, sx?: object }) {

    return (
        <Paper sx={props.sx}>
            <Stack direction="row" spacing={1} padding={1}>
                <Button
                    variant="outlined"
                    startIcon={<Add />}
                    onClick={() => props.onClickNew()}
                >
                    New Strength Training Exercise
                </Button>
            </Stack>
        </Paper>
    )
}

export default StrengthTrainingActionPanel