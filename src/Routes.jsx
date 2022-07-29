import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About"
import { Contact } from "./pages/Contact/Contact";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
        </Router>
    )
}