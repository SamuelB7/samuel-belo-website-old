import React from "react";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About"
import { Contact } from "../pages/Contact/Contact";
import {
    Route,
    Routes,
    useLocation
} from "react-router-dom";

import { AnimatePresence } from 'framer-motion'

export function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
        </AnimatePresence>
    )
}