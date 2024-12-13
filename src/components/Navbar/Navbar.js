import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import instagramWhite from "../../assets/instagram_white.png";
import instagramBlack from "../../assets/instagram_black.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Update the state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Set scroll threshold (e.g., 50px)
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      id: 2,
      path: "",
      text: "About",
      sublinks: [
        {
          id: 1,
          path: "/instructors",
          text: "Instructors",
        },
        {
          id: 2,
          path: "/classes",
          text: "Classes",
        },
        {
          id: 3,
          path: "/prices",
          text: "Prices",
        },
      ],
    },
    {
      id: 1,
      path: "/schedule",
      text: "Schedule",
    },
    {
      id: 3,
      path: "/contact",
      text: "Contact",
    },
  ];

  return (
    <div
      className={`navbar_container ${scrolled ? "scrolled" : ""}`}
      // Optionally, you can use inline styles if you don't want to use CSS class
      // style={{ backgroundColor: scrolled ? "black" : "transparent" }}
    >
      <Link to="/">
        <h2 className="Anton">COMBAT 24</h2>
      </Link>
      <nav className="nav_container">
        {navLinks.map((link) => (
          <Link to={link.path} key={link.id}>
            <div className="nav_link_item">
              <p className="nue">{link.text}</p>
              {link.sublinks && (
                <IoIosArrowUp
                  style={{
                    color: "white",
                    transform: "rotate(180deg)",
                  }}
                />
              )}
            </div>
          </Link>
        ))}
      </nav>
      <div className="social_container">
        <Link to="https://www.instagram.com/combat.24/">
          <img src={instagramWhite} alt="instagram" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
