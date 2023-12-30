import { useState } from "react"
import { Stack, TextField, Typography, Button } from "@mui/material"
import Joi from "joi"

function NewStrengthTrainingForm(props: { initInfo?: { name: string, totalSets: number, repsPerSet: number, weight: number }, onSubmit: any, onCancel: any }) {

    const [isPendingSubmit, setPendingSubmit] = useState<boolean>(false)
    const [inputName, setInputName] = useState<string>(props.initInfo === undefined ? "" : props.initInfo!.name)
    const [inputTotalSets, setInputTotalSets] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo!.totalSets)
    const [inputRepsPerSet, setInputRepsPerSet] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo!.repsPerSet)
    const [inputWeight, setInputWeight] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo!.weight)

    const isNameValid = Joi.string().min(1).max(100).validate(inputName)
    const isTotalSetsValid = Joi.number().positive().validate(inputTotalSets)
    const isRepsPerSetValid = Joi.number().positive().validate(inputRepsPerSet)
    const isWeightValid = Joi.number().positive().validate(inputWeight)
    const isValid: boolean = (
        isNameValid.error === undefined &&
        isTotalSetsValid.error === undefined &&
        isRepsPerSetValid.error === undefined &&
        isWeightValid.error === undefined
    )

    function handleSubmit() {
        setPendingSubmit(true)
        props.onSubmit(inputName, inputTotalSets, inputRepsPerSet, inputWeight)
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
                    label="Weight"
                    error={isWeightValid.error !== undefined}
                    disabled={isPendingSubmit}
                    value={inputWeight}
                    onChange={(e) => setInputWeight(Number.parseFloat(e.target.value))}
                />
                <TextField
                    fullWidth
                    type="number"
                    variant="standard"
                    label="Total Sets"
                    error={isTotalSetsValid.error !== undefined}
                    disabled={isPendingSubmit}
                    value={inputTotalSets}
                    onChange={(e) => setInputTotalSets(Number.parseFloat(e.target.value))}
                />
                <TextField
                    fullWidth
                    type="number"
                    variant="standard"
                    label="Reps Per Set"
                    error={isRepsPerSetValid.error !== undefined}
                    disabled={isPendingSubmit}
                    value={inputRepsPerSet}
                    onChange={(e) => setInputRepsPerSet(Number.parseInt(e.target.value))}
                />
            </Stack>
            {isPendingSubmit === true ? loadingBar : buttonBar}
        </Stack>
    )
}

export default NewStrengthTrainingForm