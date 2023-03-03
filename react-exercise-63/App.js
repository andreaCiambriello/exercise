import React from "react";
import {Welcome} from "./Welcome";
import { Routes, Route, Link } from "react-router-dom";
import { ClickCounterFunction } from "./ClickCounterFunction";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
    return (
        <div>
            <div>
                <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="users/andreaCiambriello">My Github Profile Name</Link>
            </div>
            <Routes>
                <Route path="/" element={<Welcome name="Andrea" />} />
                <Route path="/counter" element={<ClickCounterFunction />} />
                <Route path="users/:username" element={<ShowGithubUser />} />
            </Routes>   
        </div>
        
    )
}