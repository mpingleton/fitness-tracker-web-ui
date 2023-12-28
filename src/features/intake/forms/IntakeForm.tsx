import React, { useState } from "react"
import { Stack, TextField, Typography, Button } from "@mui/material"
import Joi from "joi"

function IntakeForm(props: { initInfo?: { inputTitle: string, inputContent: string }, onSubmit: any, onCancel: any }) {

    const [isPendingSubmit, setPendingSubmit] = useState<boolean>(false)
    const [inputTitle, setInputTitle] = useState<string>(props.initInfo === undefined ? "" : props.initInfo!.inputTitle)
    const [inputContent, setInputContent] = useState<string>(props.initInfo === undefined ? "" : props.initInfo!.inputContent)

    const isTitleValid = Joi.string().min(1).max(100).validate(inputTitle)
    const isContentValid = Joi.string().min(1).max(2000).validate(inputContent)
    const isValid: boolean = (isTitleValid.error === undefined && isContentValid.error === undefined)

    function handleSubmit() {
        setPendingSubmit(true)
        props.onSubmit({ inputTitle, inputContent })
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
                type="text"
                variant="outlined"
                label="Title"
                error={inputTitle.length > 0 && isTitleValid.error !== undefined}
                disabled={false}
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
            />
            <TextField
                type="text"
                variant="outlined"
                label="Content"
                error={inputContent.length > 0 && isContentValid.error !== undefined}
                disabled={false}
                value={inputContent}
                onChange={(e) => setInputContent(e.target.value)}
                multiline
                rows={4}
            />
            {isPendingSubmit === true ? loadingBar : buttonBar}
        </Stack>
    )
}

export default IntakeForm