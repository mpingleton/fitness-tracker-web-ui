import { Stack } from "@mui/material"

import CardioActionPanel from "../panels/CardioActionPanel"
import CardioDataPanel from "../panels/CardioDataPanel"

function CardioLayout(props: { cardioList: Array<object>, onClickNewCardio: Function }) {

    return (
        <Stack direction="column" padding={2} spacing={1}>
            <Stack direction="row" spacing={1} justifyContent="space-evenly">

            </Stack>
            <CardioActionPanel onClickNew={props.onClickNewCardio} />
            <CardioDataPanel cardioList={props.cardioList} />
        </Stack>
    )
}

export default CardioLayout