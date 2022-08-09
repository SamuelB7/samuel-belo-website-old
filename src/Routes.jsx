import React from "react";
import {
    BrowserRouter as Router
} from "react-router-dom";

import { Header } from "./components/Header/Header";
import { AnimatedRoutes } from "./components/AnimetedRoutes";

export function AppRoutes() {
    return (
        <Router>
            <Header></Header>
            <AnimatedRoutes></AnimatedRoutes>
        </Router>
    )
}