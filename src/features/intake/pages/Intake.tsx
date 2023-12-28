import React, { useState } from "react"
import { Button } from "@mui/material"

import PrimaryLayout from "../../../common/layouts/PrimaryLayout"
import ConfirmationModal from "../../../common/modals/ConfirmationModal"
import InputModal from "../../../common/modals/InputModal"
import IntakeForm from "../forms/IntakeForm"

function Intake() {

    const [isIntakeFormOpen, setIntakeFormOpen] = useState<boolean>(false)
    const [isConfirmModalOpen, setConfirmModalOpen] = useState<boolean>(false)

    return (
        <PrimaryLayout
            title="Nutritional Intake"
            content={<Button onClick={() => setIntakeFormOpen(true)}>Show form</Button>}
            modals={[
                (<InputModal
                    title="Test"
                    inputForm={
                        <IntakeForm
                            initInfo={{
                                inputTitle: "",
                                inputContent: ""
                            }}
                            onSubmit={(d: object) => {
                                alert(JSON.stringify(d))
                                setIntakeFormOpen(false)
                                setConfirmModalOpen(true)
                            }}
                            onCancel={() => setIntakeFormOpen(false)}
                        />
                    }
                    isOpen={isIntakeFormOpen}
                    onClose={() => setIntakeFormOpen(false)}
                />),
                (<ConfirmationModal
                    title="Confirmation"
                    message="Are you sure you want to confirm this message?"
                    isOpen={isConfirmModalOpen}
                    onCancel={() => setConfirmModalOpen(false)}
                    onConfirm={() => {
                        setConfirmModalOpen(false)
                    }}
                />)
            ]}
        />
    )
}

export default Intake