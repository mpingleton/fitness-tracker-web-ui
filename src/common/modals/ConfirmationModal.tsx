import React, { useState } from "react"
import { Modal, Paper, Stack, Typography, Divider, Button } from "@mui/material"

function ConfirmationModal(props: { title: string, message: string, isOpen: boolean, onCancel: any, onConfirm: any }) {
    
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
        <Modal open={props.isOpen}>
            <Paper
                sx={{
                    position: 'absolute',
                    width: '400px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: 2
                }}
            >
                <Stack direction="column" spacing={1} padding={1}>
                    <Typography variant="h6">{props.title}</Typography>
                    <Divider />
                    <Typography textAlign="center">{props.message}</Typography>
                    {isPendingSubmit === true ? loadingBar : buttonBar}
                </Stack>
            </Paper>
        </Modal>
    )
}

export default ConfirmationModal