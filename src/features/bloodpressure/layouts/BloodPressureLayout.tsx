import { Stack } from "@mui/material"

import BloodPressureActionPanel from "../panels/BloodPressureActionPanel"
import BloodPressureDataPanel from "../panels/BloodPressureDataPanel"

function BloodPressureLayout(props: { bloodPressureList: Array<object>, onClickNewBloodPressure: Function }) {

    return (
        <Stack direction="column" padding={2} spacing={1}>
            <BloodPressureActionPanel onClickNew={props.onClickNewBloodPressure} />
            <BloodPressureDataPanel bloodPressureList={props.bloodPressureList} />
        </Stack>
    )
}

export default BloodPressureLayout