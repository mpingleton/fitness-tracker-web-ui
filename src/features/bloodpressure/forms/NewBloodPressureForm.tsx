import { useState } from "react"
import { Stack, TextField, Typography, Button } from "@mui/material"
import Joi from "joi"

function NewBloodPressureForm(props: { initInfo?: { systolic: number, diastolic: number, rate: number }, onSubmit: any, onCancel: any }) {

    const [isPendingSubmit, setPendingSubmit] = useState<boolean>(false)
    const [inputSystolic, setInputSystolic] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo!.systolic)
    const [inputDiastolic, setInputDiastolic] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo!.diastolic)
    const [inputRate, setInputRate] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo!.rate)

    const isSystolicValid = Joi.number().positive().validate(inputSystolic)
    const isDiastolicValid = Joi.number().positive().validate(inputDiastolic)
    const isRateValid = Joi.number().positive().validate(inputRate)
    const isValid: boolean = (
        isSystolicValid.error === undefined &&
        isDiastolicValid.error === undefined &&
        isRateValid.error === undefined
    )

    function handleSubmit() {
        setPendingSubmit(true)
        props.onSubmit(inputSystolic, inputDiastolic, inputRate)
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
            <Stack direction="row" spacing={1}>
                <TextField
                    fullWidth
                    type="number"
                    variant="standard"
                    label="Systolic Pressure (mmHg)"
                    error={isSystolicValid.error !== undefined}
                    disabled={isPendingSubmit}
                    value={inputSystolic}
                    onChange={(e) => setInputSystolic(Number.parseFloat(e.target.value))}
                />
                <TextField
                    fullWidth
                    type="number"
                    variant="standard"
                    label="Diastolic Pressure (mmHg)"
                    error={isDiastolicValid.error !== undefined}
                    disabled={isPendingSubmit}
                    value={inputDiastolic}
                    onChange={(e) => setInputDiastolic(Number.parseFloat(e.target.value))}
                />
                <TextField
                    fullWidth
                    type="number"
                    variant="standard"
                    label="Rate (bpm)"
                    error={isRateValid.error !== undefined}
                    disabled={isPendingSubmit}
                    value={inputRate}
                    onChange={(e) => setInputRate(Number.parseFloat(e.target.value))}
                />
            </Stack>
            {isPendingSubmit === true ? loadingBar : buttonBar}
        </Stack>
    )
}

export default NewBloodPressureForm