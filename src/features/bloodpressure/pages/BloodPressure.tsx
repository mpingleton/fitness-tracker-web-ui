import { useState } from "react"
import { Typography } from "@mui/material";
import dayjs from "dayjs"

import PrimaryLayout from "../../../common/layouts/PrimaryLayout"
import InputModal from "../../../common/modals/InputModal"
import BloodPressureLayout from "../layouts/BloodPressureLayout"
import NewBloodPressureForm from "../forms/NewBloodPressureForm"

import getMyBloodPressureMeaurements from "../../../data/bloodpressure/getMyBloodPressureMeaurements"
import putBloodPressureMeasurement from "../../../data/bloodpressure/putBloodPressureMeasurement"
import getMyBloodPressureMeasurements from "../../../data/bloodpressure/getMyBloodPressureMeaurements";

function BloodPressure() {

    const [isNewBloodPressureModalOpen, setNewBloodPressureModalOpen] = useState<boolean>(false)

    const [bloodPressureList, setBloodPressureList] = useState<any>(undefined)

    if (bloodPressureList === undefined) {
        setBloodPressureList(null)
        getMyBloodPressureMeaurements()
            .then((result) => setBloodPressureList(result))
            .catch((err) => console.log(err))
    }

    function content() {
        if (bloodPressureList === undefined || bloodPressureList === null) {
            return (<Typography>Loading data...</Typography>)
        } else {
            return (
                <BloodPressureLayout
                    bloodPressureList={bloodPressureList}
                    onClickNewBloodPressure={() => setNewBloodPressureModalOpen(true)}
                />
            )
        }
    }

    function handleSubmitBloodPressureMeasurement(systolic: number, diastolic: number, rate: number) {
        putBloodPressureMeasurement(dayjs().format(), systolic, diastolic, rate)
            .then(() => getMyBloodPressureMeasurements())
            .then((result) => {
                setBloodPressureList(result)
                setNewBloodPressureModalOpen(false)
            })
            .catch((err) => console.log(err))
    }

    return (
        <PrimaryLayout
            title="Blood Pressure Measurements"
            content={content()}
            modals={[
                (<InputModal
                    title="New Blood Pressure Measurement"
                    isOpen={isNewBloodPressureModalOpen}
                    onClose={() => setNewBloodPressureModalOpen(false)}
                    inputForm={
                        <NewBloodPressureForm
                            onSubmit={handleSubmitBloodPressureMeasurement}
                            onCancel={() => setNewBloodPressureModalOpen(false)}
                        />
                    }
                />)
            ]}
        />
    )
}

export default BloodPressure