import React from "react";
import {Welcome} from "./Welcome";
import { Routes, Route } from "react-router-dom";
import { ClickCounterFunction } from "./ClickCounterFunction";
import { ShowGithubUser } from "./ShowGithubUser"

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome name="Andrea" />} />
            <Route path="/counter" element={<ClickCounterFunction />} />
            <Route path="users/:username" element={<ShowGithubUser />} />
        </Routes>
    )
}