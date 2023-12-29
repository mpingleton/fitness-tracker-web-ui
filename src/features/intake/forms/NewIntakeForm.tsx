import { useState } from "react"
import { Stack, TextField, Typography, Button } from "@mui/material"
import Joi from "joi"

function NewIntakeForm(props: { initInfo?: { subject: string, numberServings: number, calories: number, carbohydrates: number, protein: number, fat: number }, onSubmit: any, onCancel: any }) {

    const [isPendingSubmit, setPendingSubmit] = useState<boolean>(false)
    const [inputSubject, setInputSubject] = useState<string>(props.initInfo === undefined ? "" : props.initInfo!.subject)
    const [inputNumberServings, setInputNumberServings] = useState<number>(props.initInfo === undefined ? 1 : props.initInfo!.numberServings)
    const [inputCalories, setInputCalories] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo!.calories)
    const [inputCarbohydrates, setInputCarbohydrates] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo!.carbohydrates)
    const [inputProtein, setInputProtein] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo!.protein)
    const [inputFat, setInputFat] = useState<number>(props.initInfo === undefined ? 0 : props.initInfo!.fat)

    const isSubjectValid = Joi.string().min(1).max(100).validate(inputSubject)
    const isNumberServingsValid = Joi.number().positive().validate(inputNumberServings)
    const isCaloriesValid = Joi.number().min(0).validate(inputCalories)
    const isCarbohydratesValid = Joi.number().min(0).validate(inputCarbohydrates)
    const isProteinValid = Joi.number().min(0).validate(inputProtein)
    const isFatValid = Joi.number().min(0).validate(inputFat)
    const isValid: boolean = (
        isSubjectValid.error === undefined &&
        isNumberServingsValid.error === undefined &&
        isCaloriesValid.error === undefined &&
        isCarbohydratesValid.error === undefined &&
        isProteinValid.error === undefined &&
        isFatValid.error === undefined
    )

    function handleSubmit() {
        setPendingSubmit(true)
        props.onSubmit(inputSubject, inputNumberServings, inputCalories, inputCarbohydrates, inputProtein, inputFat)
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
                    type="text"
                    variant="standard"
                    label="Subject"
                    error={inputSubject.length > 0 && isSubjectValid.error !== undefined}
                    disabled={isPendingSubmit}
                    value={inputSubject}
                    onChange={(e) => setInputSubject(e.target.value)}
                />
                <TextField
                    sx={{ width: "25%" }}
                    type="number"
                    variant="standard"
                    label="Number of Servings"
                    error={isNumberServingsValid.error !== undefined}
                    value={inputNumberServings}
                    onChange={(e) => setInputNumberServings(Number.parseFloat(e.target.value))}
                />
            </Stack>
            <Stack direction="row" spacing={1}>
                <TextField
                    fullWidth
                    type="number"
                    variant="standard"
                    label="Calories"
                    error={isCaloriesValid.error !== undefined}
                    value={inputCalories}
                    onChange={(e) => setInputCalories(Number.parseFloat(e.target.value))}
                />
                <TextField
                    fullWidth
                    type="number"
                    variant="standard"
                    label="Carbohydrates (g)"
                    error={isCarbohydratesValid.error !== undefined}
                    value={inputCarbohydrates}
                    onChange={(e) => setInputCarbohydrates(Number.parseFloat(e.target.value))}
                />
                <TextField
                    fullWidth
                    type="number"
                    variant="standard"
                    label="Protein (g)"
                    error={isProteinValid.error !== undefined}
                    value={inputProtein}
                    onChange={(e) => setInputProtein(Number.parseFloat(e.target.value))}
                />
                <TextField
                    fullWidth
                    type="number"
                    variant="standard"
                    label="Total Fat (g)"
                    error={isFatValid.error !== undefined}
                    value={inputFat}
                    onChange={(e) => setInputFat(Number.parseFloat(e.target.value))}
                />
            </Stack>
            {isPendingSubmit === true ? loadingBar : buttonBar}
        </Stack>
    )
}

export default NewIntakeForm