import { Stack } from "@mui/material"

import CardioActionPanel from "../panels/CardioActionPanel"
import CardioDataPanel from "../panels/CardioDataPanel"
import CardioDurationPanel from "../panels/CardioDurationPanel"
import CardioDistancePanel from "../panels/CardioDistancePanel"
import CardioCaloriesBurnedPanel from "../panels/CardioCaloriesBurnedPanel"

function CardioLayout(props: { cardioList: Array<object>, onClickNewCardio: Function }) {

    return (
        <Stack direction="column" padding={2} spacing={1}>
            <Stack direction="row" spacing={1} justifyContent="space-evenly">
                <CardioDurationPanel cardioList={props.cardioList} sx={{ width: "15%" }} />
                <CardioDistancePanel cardioList={props.cardioList} sx={{ width: "15%" }} />
                <CardioCaloriesBurnedPanel cardioList={props.cardioList} sx={{ width: "15%" }} />
            </Stack>
            <CardioActionPanel onClickNew={props.onClickNewCardio} />
            <CardioDataPanel cardioList={props.cardioList} />
        </Stack>
    )
}

export default CardioLayout