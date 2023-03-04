import React from "react";
import { Welcome } from "./Welcome";
import { Routes, Route } from "react-router-dom";
import { ClickCounterFunction } from "./ClickCounterFunction";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

export function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome name="Andrea" />} />
                <Route path="/counter" element={<ClickCounterFunction />} />
                <Route path="/users" element={<GithubUserList />} >
                    <Route path=":username" element={<ShowGithubUser />} />
                </Route>
                <Route path="*" element={<p>Not Found</p>} />
            </Routes>
        </div>
    )
}