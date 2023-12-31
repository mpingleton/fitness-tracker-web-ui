import { Paper, Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

function StrengthTrainingDataPanel(props: { strengthTrainingList: Array<object>, sx?: object }) {

    const columns = [
        { field: "timestampBegin", headerName: "Time Began", width: 180 },
        { field: "name", headerName: "Name", width: 400 },
        { field: "weight", headerName: "Weight (lbs)", width: 150 },
        { field: "totalSets", headerName: "Total Sets", width: 150 },
        { field: "repsPerSet", headerName: "Reps per Set", width: 150 },
    ]

    return (
        <Paper sx={props.sx}>
            <Box sx={{ height: 600 }} padding={1}>
                <DataGrid
                    rows={props.strengthTrainingList}
                    columns={columns}
                />
            </Box>
        </Paper>
    )
}

export default StrengthTrainingDataPanel