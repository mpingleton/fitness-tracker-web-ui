import { Paper, Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

function IntakeDataPanel(props: { intakeList: Array<object>, sx?: object }) {

    const columns = [
        { field: 'timestamp', headerName: 'Timestamp', width: 180 },
        { field: 'subject', headerName: 'Subject', width: 400 },
        { field: 'numberServings', headerName: 'Servings', width: 100 },
        { field: 'calories', headerName: 'Calories', width: 150 },
        { field: 'carbohydrates', headerName: 'Carbohydrates', width: 150 },
        { field: 'protein', headerName: 'Protein', width: 150 },
        { field: 'fat', headerName: 'Total Fat', width: 150 }
    ]

    return (
        <Paper sx={props.sx}>
            <Box sx={{ height: 600 }} padding={1}>
                <DataGrid
                    rows={props.intakeList}
                    columns={columns}
                />
            </Box>        
        </Paper>
    )
}

export default IntakeDataPanel