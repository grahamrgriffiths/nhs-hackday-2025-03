import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppointmentForm from "./pages/AppointmentForm";
import Summary from "./pages/Summary";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/appointment-form" element={<AppointmentForm />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
