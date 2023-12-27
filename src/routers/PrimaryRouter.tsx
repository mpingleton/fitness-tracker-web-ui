import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Intake from "../features/intake/pages/Intake"
import Cardio from "../features/cardio/pages/Cardio"
import StrengthTraining from "../features/strengthtraining/pages/StrengthTraining"
import BloodPressure from "../features/bloodpressure/pages/BloodPressure"
import Weight from "../features/weight/pages/Weight"

function PrimaryRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index={true} element={<p>Landing and login page.</p>} />
                <Route index={false} path="intake" element={<Intake />} />
                <Route index={false} path="cardio" element={<Cardio />} />
                <Route index={false} path="strength" element={<StrengthTraining />} />
                <Route index={false} path="bloodpressure" element={<BloodPressure />} />
                <Route index={false} path="weight" element={<Weight />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PrimaryRouter