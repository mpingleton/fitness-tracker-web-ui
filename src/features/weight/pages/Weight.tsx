import { useState } from "react"
import { Typography } from "@mui/material";
import dayjs from "dayjs"

import PrimaryLayout from "../../../common/layouts/PrimaryLayout"
import InputModal from "../../../common/modals/InputModal"
import WeightLayout from "../layouts/WeightLayout"
import NewWeightForm from "../forms/NewWeightForm"

import getMyWeightMeasurements from "../../../data/weight/getMyWeightMeasurements";
import putWeightMeasurement from "../../../data/weight/putWeightMeasurement";

function Weight() {

    const [isNewWeightModalOpen, setNewWeightModalOpen] = useState<boolean>(false)

    const [weightList, setWeightList] = useState<any>(undefined)

    if (weightList === undefined) {
        setWeightList(null)
        getMyWeightMeasurements()
            .then((result) => setWeightList(result))
            .catch((err) => console.log(err))
    }

    function content() {
        if (weightList === undefined || weightList === null) {
            return (<Typography>Loading data...</Typography>)
        } else {
            return (
                <WeightLayout
                    weightList={weightList}
                    onClickNewWeight={() => setNewWeightModalOpen(true)}
                />
            )
        }
    }

    function handleSubmitWeightMeasurement(weight: number) {
        putWeightMeasurement(dayjs().format(), weight)
            .then(() => getMyWeightMeasurements())
            .then((result) => {
                setWeightList(result)
                setNewWeightModalOpen(false)
            })
            .catch((err) => console.log(err))
    }

    return (
        <PrimaryLayout
            title="Weight Measurements"
            content={content()}
            modals={[
                (<InputModal
                    title="New Weight Measurement"
                    isOpen={isNewWeightModalOpen}
                    onClose={() => setNewWeightModalOpen(false)}
                    inputForm={
                        <NewWeightForm
                            onSubmit={handleSubmitWeightMeasurement}
                            onCancel={() => setNewWeightModalOpen(false)}
                        />
                    }
                />)
            ]}
        />
    )
}

export default Weight