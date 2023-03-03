import React from "react";
import {Welcome} from "./Welcome";
import { Routes, Route } from "react-router-dom";
import { ClickCounterFunction } from "./ClickCounterFunction";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome name="Andrea" />} />
            <Route path="/counter" element={<ClickCounterFunction />} />
        </Routes>
    )
}