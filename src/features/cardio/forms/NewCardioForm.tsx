import { useState } from "react"
import { Stack, TextField, Typography, Button } from "@mui/material"
import Joi from "joi"

function NewCardioForm(props: { initInfo?: { name: string, duration: number, distance: number, caloriesBurned: number }, onSubmit: any, onCancel: any }) {

    const [isPendingSubmit, setPendingSubmit] = useState<boolean>(false)
    const [inputName, setInputName] = useState<string>(props.initInfo === undefined ? "" : props.initInfo!.name)
    const [inputDuration, setInputDuration] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo.duration)
    const [inputDistance, setInputDistance] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo.distance)
    const [inputCaloriesBurned, setInputCaloriesBurned] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo.caloriesBurned)

    const isNameValid = Joi.string().min(1).max(100).validate(inputName)
    const isDurationValid = Joi.number().positive().validate(inputDuration)
    const isDistanceValid = Joi.number().positive().validate(inputDistance)
    const isCaloriesBurnedValid = Joi.number().positive().validate(inputCaloriesBurned)
    const isValid: boolean = (
        isNameValid.error === undefined &&
        isDurationValid.error === undefined &&
        isDistanceValid.error === undefined &&
        isCaloriesBurnedValid.error === undefined
    )

    function handleSubmit() {
        setPendingSubmit(true)
        props.onSubmit(inputName, inputDuration, inputDistance, inputCaloriesBurned)
    }

    const buttonBar = (
        <Stack direction="row" spacing={1} justifyContent="end">
            <Button onClick={() => props.onCancel()}>Cancel</Button>
            <Button onClick={() => handleSubmit()} disabled={!isValid}>Submit</Button>
        </Stack>
    )

    const loadingBar = (
        <Stack direction="row" spacing={1} justifyContent="end">
            <Typography>Loading...</Typography>
        </Stack>
    )

    return (
        <Stack direction="column" spacing={1}>
            <TextField
                fullWidth
                type="text"
                variant="standard"
                label="Subject"
                error={inputName.length > 0 && isNameValid.error !== undefined}
                disabled={isPendingSubmit}
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
            />
            <Stack direction="row" spacing={1}>
                <TextField
                    fullWidth
                    type="number"
                    variant="standard"
                    label="Duration"
                    error={isDurationValid.error !== undefined}
                    disabled={isPendingSubmit}
                    value={inputDuration}
                    onChange={(e) => setInputDuration(Number.parseInt(e.target.value))}
                />
                <TextField
                    fullWidth
                    type="number"
                    variant="standard"
                    label="Distance"
                    error={isDistanceValid.error !== undefined}
                    disabled={isPendingSubmit}
                    value={inputDistance}
                    onChange={(e) => setInputDistance(Number.parseFloat(e.target.value))}
                />
                <TextField
                    fullWidth
                    type="number"
                    variant="standard"
                    label="Calories"
                    error={isCaloriesBurnedValid.error !== undefined}
                    disabled={isPendingSubmit}
                    value={inputCaloriesBurned}
                    onChange={(e) => setInputCaloriesBurned(Number.parseFloat(e.target.value))}
                />
            </Stack>
            {isPendingSubmit === true ? loadingBar : buttonBar}
        </Stack>
    )
}

export default NewCardioForm