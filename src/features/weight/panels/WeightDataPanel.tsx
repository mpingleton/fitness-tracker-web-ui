import { Paper, Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

function WeightDataPanel(props: { weightList: Array<object>, sx?: object }) {

    const columns = [
        { field: "timestamp", headerName: "Timestamp", width: 180 },
        { field: "weight", headerName: "Weight (lbs)", width: 200 }
    ]

    return (
        <Paper sx={props.sx}>
            <Box sx={{ height: 600 }} padding={1}>
                <DataGrid
                    rows={props.weightList}
                    columns={columns}
                />
            </Box>
        </Paper>
    )
}

export default WeightDataPanel