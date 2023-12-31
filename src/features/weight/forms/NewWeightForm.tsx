import { useState } from "react"
import { Stack, TextField, Typography, Button } from "@mui/material"
import Joi from "joi"

function NewWeightForm(props: { initInfo?: { weight: number }, onSubmit: any, onCancel: any }) {

    const [isPendingSubmit, setPendingSubmit] = useState<boolean>(false)
    const [inputWeight, setInputWeight] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo!.weight)

    const isWeightValid = Joi.number().positive().validate(inputWeight)
    const isValid: boolean = (
        isWeightValid.error === undefined
    )

    function handleSubmit() {
        setPendingSubmit(true)
        props.onSubmit(inputWeight)
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
                type="number"
                variant="standard"
                label="Weight (lbs)"
                error={isWeightValid.error !== undefined}
                disabled={isPendingSubmit}
                value={inputWeight}
                onChange={(e) => setInputWeight(Number.parseFloat(e.target.value))}
            />
            {isPendingSubmit === true ? loadingBar : buttonBar}
        </Stack>
    )
}

export default NewWeightForm