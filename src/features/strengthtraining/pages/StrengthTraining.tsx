import { useState } from "react"
import { Typography } from "@mui/material";
import dayjs from "dayjs"

import PrimaryLayout from "../../../common/layouts/PrimaryLayout"
import InputModal from "../../../common/modals/InputModal"
import StrengthTrainingLayout from "../layouts/StrengthTrainingLayout"
import NewStrengthTrainingForm from "../forms/NewStrengthTrainingForm"

import getMyStrengthTraining from "../../../data/strengthtraining/getMyStrengthTraining"
import putStrengthTraining from "../../../data/strengthtraining/putStrengthTraining"

function StrengthTraining() {

    const [isNewStrengthTrainingModalOpen, setNewStrengthTrainingModalOpen] = useState<boolean>(false)

    const [strengthTrainingList, setStrengthTrainingList] = useState<any>(undefined)

    if (strengthTrainingList === undefined) {
        setStrengthTrainingList(null)
        getMyStrengthTraining()
            .then((result) => setStrengthTrainingList(result))
            .catch((err) => console.log(err))
    }

    function content() {
        if (strengthTrainingList === undefined || strengthTrainingList === null) {
            return (<Typography>Loading data...</Typography>)
        } else {
            return (
                <StrengthTrainingLayout
                    strengthTrainingList={strengthTrainingList}
                    onClickNewStrengthTraining={() => setNewStrengthTrainingModalOpen(true)}
                />
            )
        }
    }

    function handleSubmitStrengthTraining(name: string, totalSets: number, repsPerSet: number, weight: number) {
        putStrengthTraining(name, dayjs().format(), totalSets, repsPerSet, weight)
            .then(() => getMyStrengthTraining())
            .then((result) => {
                setStrengthTrainingList(result)
                setNewStrengthTrainingModalOpen(false)
            })
            .catch((err) => console.log(err))
    }

    return (
        <PrimaryLayout
            title="Strength Training"
            content={content()}
            modals={[
                (<InputModal
                    title="New Strength Training Exercise"
                    isOpen={isNewStrengthTrainingModalOpen}
                    onClose={() => setNewStrengthTrainingModalOpen(false)}
                    inputForm={
                        <NewStrengthTrainingForm
                            onSubmit={handleSubmitStrengthTraining}
                            onCancel={() => setNewStrengthTrainingModalOpen(false)}
                        />
                    }
                />)
            ]}
        />
    )
}

export default StrengthTraining