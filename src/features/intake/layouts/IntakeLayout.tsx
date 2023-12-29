import { Stack } from "@mui/material"

import IntakeCaloriesPanel from "../panels/IntakeCaloriesPanel"
import IntakeCarbohydratesPanel from "../panels/IntakeCarbohydratesPanel"
import IntakeProteinPanel from "../panels/IntakeProteinPanel"
import IntakeFatPanel from "../panels/IntakeFatPanel"
import IntakeActionPanel from "../panels/IntakeActionPanel"
import IntakeDataPanel from "../panels/IntakeDataPanel"

function IntakeLayout(props: { intakeList: Array<object>, onClickNewIntake: Function }) {

    return (
        <Stack direction="column" padding={2} spacing={1}>
            <Stack direction="row" spacing={1} justifyContent="space-evenly">
                <IntakeCaloriesPanel intakeList={props.intakeList} sx={{ width: "15%" }} />
                <IntakeCarbohydratesPanel intakeList={props.intakeList} sx={{ width: "15%" }} />
                <IntakeProteinPanel intakeList={props.intakeList} sx={{ width: "15%" }} />
                <IntakeFatPanel intakeList={props.intakeList} sx={{ width: "15%" }} />
            </Stack>
            <IntakeActionPanel onClickNew={props.onClickNewIntake} />
            <IntakeDataPanel intakeList={props.intakeList} />
        </Stack>
    )
}

export default IntakeLayout