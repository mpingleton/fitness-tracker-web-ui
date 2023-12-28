import { Modal, Paper, Stack, Typography, Divider } from "@mui/material"

function InputModal(props: { title: string, inputForm: any, isOpen: boolean, onClose: any }) {

    return (
        <Modal open={props.isOpen} onClose={props.onClose}>
            <Paper
                sx={{
                    position: 'absolute',
                    width: '600px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: 2
                }}
            >
                <Stack direction="column" spacing={1} padding={1}>
                    <Typography variant="h6">{props.title}</Typography>
                    <Divider />
                    {props.inputForm}
                </Stack>
            </Paper>
        </Modal>
    )
}

export default InputModal