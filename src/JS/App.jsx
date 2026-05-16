import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import Landing from "./landing.jsx";
import Appointment from "../Pages/Appointment.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/appointment" element={<Appointment />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;