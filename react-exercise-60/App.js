import React from "react";
import {Welcome} from "./Welcome";
import { Routes, Route } from "react-router-dom";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome name="Andrea" />} />
        </Routes>
    )
}