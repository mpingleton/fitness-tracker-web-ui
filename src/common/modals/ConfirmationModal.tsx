import React, { useState } from "react"
import { Modal, Paper, Stack, Typography, Divider } from "@mui/material"
import ConfirmationMessageLayout from "../layouts/ConfirmationMessageLayout"

function ConfirmationModal(props: { title: string, message: string, isOpen: boolean, onCancel: any, onConfirm: any }) {
    
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
                    <ConfirmationMessageLayout
                        message={props.message}
                        onCancel={props.onCancel}
                        onConfirm={props.onConfirm}
                    />
                </Stack>
            </Paper>
        </Modal>
    )
}

export default ConfirmationModal