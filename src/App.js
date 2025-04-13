import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { FaWhatsapp } from "react-icons/fa";

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Schedule = lazy(() => import("./pages/Schedule/Schedule"));

function App() {
  const location = useLocation();
  const home = location.pathname === "/";

  return (
    <>
      {
        <div
          className={`whatsapp_container ${!home ? "black" : ""}`}
          onClick={() =>
            window.open(
              "https://wa.me/918073423859",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <FaWhatsapp size={30} color={!home ? "white" : "black"} />
        </div>
      }

      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
