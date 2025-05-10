import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import ScrollResetRoutes from "./utils/ScrollResetRoutes";
import Loading from "./pages/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Schedule = lazy(() => import("./pages/Schedule/Schedule"));
const Coaches = lazy(() => import("./pages/Coaches/Coaches"));
const Classes = lazy(() => import("./pages/Classes/Classes"));
const Merchandise = lazy(() => import("./pages/Merchandise/Merchandise"));

function App() {
  return (
    <>
      {
        <div
          className={`whatsapp_container`}
          onClick={() =>
            window.open(
              "https://wa.me/918073423859",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <FaWhatsapp size={30} color={"white"} />
        </div>
      }

      <Navbar />
      <Suspense fallback={<Loading />}>
        <ScrollResetRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/merch" element={<Merchandise />} />
        </ScrollResetRoutes>
      </Suspense>
    </>
  );
}

export default App;
