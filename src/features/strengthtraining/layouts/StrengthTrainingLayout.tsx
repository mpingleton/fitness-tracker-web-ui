import { Stack } from "@mui/material"

import StrengthTrainingActionPanel from "../panels/StrengthTrainingActionPanel"
import StrengthTrainingDataPanel from "../panels/StrengthTrainingDataPanel"

function StrengthTrainingLayout(props: { strengthTrainingList: Array<object>, onClickNewStrengthTraining: Function }) {

    return (
        <Stack direction="column" padding={2} spacing={1}>
            <StrengthTrainingActionPanel onClickNew={props.onClickNewStrengthTraining} />
            <StrengthTrainingDataPanel strengthTrainingList={props.strengthTrainingList} />
        </Stack>
    )
}

export default StrengthTrainingLayout