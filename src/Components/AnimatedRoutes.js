import React from "react";
import Home from "../Pages/Home";
import Reservations from "../Pages/Reservations";
import { Routes, Route} from "react-router-dom";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import About from "../Pages/About";

function AnimatedRoutes() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default AnimatedRoutes;
