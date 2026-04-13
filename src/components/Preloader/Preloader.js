import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = ({ onComplete }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), 2500);
    const t2 = setTimeout(() => onComplete?.(), 3100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <div
      className={`preloader${exiting ? " preloader--exit" : ""}`}
      aria-hidden="true"
      role="presentation"
    >
      {/* Vignette */}
      <div className="preloader_vignette" />

      <div className="preloader_content">
        {/* COMBAT — wipes in from left */}
        <div className="preloader_row preloader_row--top">
          <span className="Anton preloader_combat">COMBAT</span>
        </div>

        {/* Orange divider line */}
        <div className="preloader_line_wrap">
          <div className="preloader_line" />
        </div>

        {/* 24 — rises from below */}
        <div className="preloader_row preloader_row--bottom">
          <span className="Anton preloader_num">24</span>
        </div>

        {/* Tagline */}
        <p className="nue preloader_tagline">Train Without Limits</p>
      </div>
    </div>
  );
};

export default Preloader;
