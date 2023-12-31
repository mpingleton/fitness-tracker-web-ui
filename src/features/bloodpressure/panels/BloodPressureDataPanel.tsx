import { Paper, Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

function BloodPressureDataPanel(props: { bloodPressureList: Array<object>, sx?: object }) {

    const columns = [
        { field: "timestamp", headerName: "Timestamp", width: 180 },
        { field: "systolic", headerName: "Systolic Pressure (mmHg)", width: 250 },
        { field: "diastolic", headerName: "Diastolic Pressure (mmHg)", width: 250 },
        { field: "rate", headerName: "Rate (bpm)", width: 250 }
    ]

    return (
        <Paper sx={props.sx}>
            <Box sx={{ height: 600 }} padding={1}>
                <DataGrid
                    rows={props.bloodPressureList}
                    columns={columns}
                />
            </Box>
        </Paper>
    )
}

export default BloodPressureDataPanel