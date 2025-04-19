// src/components/ScrollResetRoutes.js
import { useEffect } from "react";
import { useLocation, Routes } from "react-router-dom";

const ScrollResetRoutes = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantly to top before route renders
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Routes>{children}</Routes>;
};

export default ScrollResetRoutes;
