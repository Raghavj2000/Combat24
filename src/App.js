import React, { lazy, Suspense, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import ScrollResetRoutes from "./utils/ScrollResetRoutes";
import Loading from "./pages/Loading/Loading";
import { Toaster } from "react-hot-toast";
import Preloader from "./components/Preloader/Preloader";

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Schedule = lazy(() => import("./pages/Schedule/Schedule"));
const Coaches = lazy(() => import("./pages/Coaches/Coaches"));
const Classes = lazy(() => import("./pages/Classes/Classes"));
const Merchandise = lazy(() => import("./pages/Merchandise/Merchandise"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const About = lazy(() => import("./pages/AboutUs/AboutUs"));
const CoachProfile = lazy(() => import("./pages/CoachProfile/CoachProfile"));
const ClassProfile = lazy(() => import("./pages/ClassProfile/ClassProfile"));

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [preloaderDone, setPreloaderDone] = useState(
    () => !!sessionStorage.getItem("c24_loaded")
  );

  const notFoundArr = [
    "/",
    "/contact",
    "/schedule",
    "/coaches",
    "/classes",
    "/merch",
    "/about",
  ];

  const showUI =
    notFoundArr.includes(currentPath) ||
    currentPath.startsWith("/coaches/") ||
    currentPath.startsWith("/classes/");

  return (
    <HelmetProvider>
      {!preloaderDone && (
        <Preloader
          onComplete={() => {
            sessionStorage.setItem("c24_loaded", "1");
            setPreloaderDone(true);
          }}
        />
      )}
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
        <div key={location.pathname} className="page-transition">
        <ScrollResetRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/merch" element={<Merchandise />} />
          <Route path="/about" element={<About />} />
          <Route path="/coaches/:slug" element={<CoachProfile />} />
          <Route path="/classes/:slug" element={<ClassProfile />} />
          <Route path="*" element={<NotFound />} />
        </ScrollResetRoutes>
        </div>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
