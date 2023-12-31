import { Paper, Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

function CardioDataPanel(props: { cardioList: Array<object>, sx?: object }) {

    const columns = [
        { field: "timestampBegin", headerName: "Time Began", width: 180 },
        { field: "name", headerName: "Name", width: 400 },
        { field: "duration", headerName: "Duration", width: 150 },
        { field: "distance", headerName: "Distance (mi)", width: 150 },
        { field: "caloriesBurned", headerName: "Calories Burned", width: 150 }
    ]

    return (
        <Paper sx={props.sx}>
            <Box sx={{ height: 600 }} padding={1}>
                <DataGrid
                    rows={props.cardioList}
                    columns={columns}
                />
            </Box>
        </Paper>
    )
}

export default CardioDataPanel