import { useState } from "react"
import { Typography } from "@mui/material";
import dayjs from "dayjs"

import PrimaryLayout from "../../../common/layouts/PrimaryLayout"
import InputModal from "../../../common/modals/InputModal"
import CardioLayout from "../layouts/CardioLayout";
import NewCardioForm from "../forms/NewCardioForm";

import getMyCardio from "../../../data/cardio/getMyCardio"
import putCardio from "../../../data/cardio/putCardio"

function Cardio() {

    const [isNewCardioModalOpen, setNewCardioModalOpen] = useState<boolean>(false)

    const [cardioList, setCardioList] = useState<any>(undefined)

    if (cardioList === undefined) {
        setCardioList(null)
        getMyCardio()
            .then((result) => setCardioList(result))
            .catch((err) => console.log(err))
    }

    function content() {
        if (cardioList === undefined || cardioList === null) {
            return (<Typography>Loading data...</Typography>)
        } else {
            return (
                <CardioLayout
                    cardioList={cardioList}
                    onClickNewCardio={() => setNewCardioModalOpen(true)}
                />
            )
        }
    }

    function handleSubmitCardio(name: string, duration: number, distance: number, caloriesBurned: number) {
        putCardio(name, dayjs().format(), duration, distance, caloriesBurned)
            .then(() => getMyCardio())
            .then((result) => {
                setCardioList(result)
                setNewCardioModalOpen(false)
            })
            .catch((err) => console.log(err))
    }

    return (
        <PrimaryLayout
            title="Cardio Exercises"
            content={content()}
            modals={[
                (<InputModal
                    title="New Cardio Exercise"
                    isOpen={isNewCardioModalOpen}
                    onClose={() => setNewCardioModalOpen(false)}
                    inputForm={
                        <NewCardioForm
                            onSubmit={handleSubmitCardio}
                            onCancel={() => setNewCardioModalOpen(false)}
                        />
                    }
                />)
            ]}
        />
    )
}

export default Cardio