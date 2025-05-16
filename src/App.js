import React, { lazy, Suspense } from "react";
import { Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import ScrollResetRoutes from "./utils/ScrollResetRoutes";
import Loading from "./pages/Loading/Loading";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Schedule = lazy(() => import("./pages/Schedule/Schedule"));
const Coaches = lazy(() => import("./pages/Coaches/Coaches"));
const Classes = lazy(() => import("./pages/Classes/Classes"));
const Merchandise = lazy(() => import("./pages/Merchandise/Merchandise"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const About = lazy(() => import("./pages/AboutUs/AboutUs"));

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  const notFoundArr = [
    "/",
    "/contact",
    "/schedule",
    "/coaches",
    "/classes",
    "/merch",
    "/about",
  ];

  const showUI = notFoundArr.includes(currentPath);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontFamily: "Anton, sans-serif", // or 'nue' or any custom font
          },
        }}
      />
      {showUI && (
        <div
          className="whatsapp_container"
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
      )}

      {showUI && <Navbar />}

      <Suspense fallback={<Loading />}>
        <ScrollResetRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/merch" element={<Merchandise />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </ScrollResetRoutes>
      </Suspense>
    </>
  );
}

export default App;
