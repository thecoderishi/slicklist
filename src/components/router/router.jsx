import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomAppBar from "../UI/appBar";
import Home from "../../pages/home";
import NavCustomDrawer from "../UI/drawer";
import MobileDrawer from "../UI/mobileDrawer";
import SignIn from "../../pages/signin";
import SignUp from "../../pages/signup";

export default function Router() {
    return (
        <BrowserRouter>
            <NavCustomDrawer />
            <MobileDrawer />
            <CustomAppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}
