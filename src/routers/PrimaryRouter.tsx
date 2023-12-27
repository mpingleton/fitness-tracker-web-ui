import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function PrimaryRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index={true} element={<p>Landing and login page.</p>} />
                <Route index={false} path="intake" element={<p>Nutrition intake page.</p>} />
                <Route index={false} path="cardio" element={<p>Cardio training page.</p>} />
                <Route index={false} path="strength" element={<p>Strength training page.</p>} />
                <Route index={false} path="bloodpressure" element={<p>Blood pressure measurements page.</p>} />
                <Route index={false} path="weight" element={<p>Weight measurement page.</p>} />
            </Routes>
        </BrowserRouter>
    )
}

export default PrimaryRouter