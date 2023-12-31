import { Stack } from "@mui/material"

import WeightActionPanel from "../panels/WeightActionPanel"
import WeightDataPanel from "../panels/WeightDataPanel";

function WeightLayout(props: { weightList: Array<object>, onClickNewWeight: Function }) {

    return (
        <Stack direction="column" padding={2} spacing={1}>
            <WeightActionPanel onClickNew={props.onClickNewWeight} />
            <WeightDataPanel weightList={props.weightList} />
        </Stack>
    )
}

export default WeightLayout