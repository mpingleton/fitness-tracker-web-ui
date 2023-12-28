import React, { useState } from "react"
import { Button, Stack, Typography } from "@mui/material"

function ConfirmationMessageLayout(props: { message: string, onCancel: any, onConfirm: any }) {

    const [isPendingSubmit, setPendingSubmit] = useState<boolean>(false)

    function handleConfirm() {
        setPendingSubmit(true)
        props.onConfirm()
    }

    const buttonBar = (
        <Stack direction="row" spacing={1} justifyContent="end">
            <Button onClick={() => props.onCancel()}>Cancel</Button>
            <Button onClick={() => handleConfirm()}>Confirm</Button>
        </Stack>
    )

    const loadingBar = (
        <Stack direction="row" spacing={1} justifyContent="end">
            <Typography>Loading...</Typography>
        </Stack>
    )

    return (
        <Stack direction="column" spacing={1}>
            <Typography textAlign="center">{props.message}</Typography>
            {isPendingSubmit === true ? loadingBar : buttonBar}
        </Stack>
    )
}

export default ConfirmationMessageLayout