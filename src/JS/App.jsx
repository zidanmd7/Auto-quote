import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import Landing from "./landing.jsx";
import Appointment from "../Pages/Appointment.jsx";
import GetQuote from "../Pages/getQuote.jsx";
import MiniGallery from "../Pages/mini-gallery.jsx";
import Gallery from "../Pages/gallery.jsx";
import Services from "../Pages/services.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/quote" element={<GetQuote/>}/>
                    <Route path="/minigallery" element={<MiniGallery/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/services" element={<Services/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;