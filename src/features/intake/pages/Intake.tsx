import { useState } from "react"
import { Typography } from "@mui/material"
import dayjs from "dayjs"

import PrimaryLayout from "../../../common/layouts/PrimaryLayout"
import InputModal from "../../../common/modals/InputModal"
import IntakeLayout from "../layouts/IntakeLayout"
import NewIntakeForm from "../forms/NewIntakeForm"

import getMyIntakes from "../../../data/intake/getMyIntakes"
import putIntake from "../../../data/intake/putIntake"

function Intake() {

    const [isNewIntakeModalOpen, setNewIntakeModalOpen] = useState<boolean>(false)

    const [intakeList, setIntakeList] = useState<any>(undefined)

    if (intakeList === undefined) {
        setIntakeList(null)
        getMyIntakes()
            .then((result) => setIntakeList(result))
            .catch((err) => console.log(err))
    }

    function content() {
        if (intakeList === undefined || intakeList === null) {
            return (<Typography>Loading data...</Typography>)
        } else {
            return (
                <IntakeLayout 
                    intakeList={intakeList}
                    onClickNewIntake={() => setNewIntakeModalOpen(true)}
                />
            )
        }
    }

    function handleSubmitIntake(subject: string, numberServings: number, calories: number, carbohydrates: number, protein: number, fat: number) {
        putIntake(dayjs().format(), subject, numberServings, calories, carbohydrates, protein, fat)
            .then(() => getMyIntakes())
            .then((result) => {
                setIntakeList(result)
                setNewIntakeModalOpen(false)
            })
            .catch((err) => console.log(err))
    }

    return (
        <PrimaryLayout
            title="Nutritional Intake"
            content={content()}
            modals={[
                (<InputModal
                    title="New Intake"
                    isOpen={isNewIntakeModalOpen}
                    onClose={() => setNewIntakeModalOpen(false)}
                    inputForm={
                        <NewIntakeForm
                            onSubmit={handleSubmitIntake}
                            onCancel={() => setNewIntakeModalOpen(false)}
                        />
                    }
                />)
            ]}
        />
    )
}

export default Intake