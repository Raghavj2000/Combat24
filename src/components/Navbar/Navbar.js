import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ExternalLink } from "../../utils/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      id: 2,
      path: null,
      text: "About",
      sublinks: [
        { id: 1, path: "/story", text: "Our Story" },
        { id: 2, path: "/coaches", text: "Coaches" },
        { id: 3, path: "/classes", text: "Classes" },
        { id: 4, path: "/gallery", text: "Gallery" },
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
    {
      id: 4,
      path: "/merch",
      text: "Merchandise",
    },
  ];

  return (
    <div
      className={`navbar_container ${
        pathname === "/" && scrolled
          ? "scrolled"
          : pathname !== "/"
          ? "scrollwhite"
          : ""
      }`}
    >
      <Link to="/">
        <h2
          className="Anton header_title"
          style={{ color: pathname !== "/" && "black" }}
        >
          COMBAT 24
        </h2>
      </Link>

      <nav className="nav_container">
        {navLinks.map((link) => (
          <div className="nav_link_item" key={link.id}>
            {link.sublinks ? (
              <div className="dropdown">
                <div className="dropdown_trigger">
                  <p
                    className="nue"
                    style={{ color: pathname !== "/" && "black" }}
                  >
                    {link.text}
                  </p>
                </div>
                <div
                  className="dropdown_menu"
                  style={{
                    backgroundColor: pathname !== "/" ? "black" : "white",
                    color: pathname !== "/" ? "white" : "black",
                  }}
                >
                  {link.sublinks.map((sublink) => (
                    <Link
                      to={sublink.path}
                      key={sublink.id}
                      className={`dropdown_item nue ${
                        pathname !== "/" && "black"
                      }`}
                    >
                      {sublink.text}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link to={link.path}>
                <p
                  className="nue"
                  style={{ color: pathname !== "/" && "black" }}
                >
                  {link.text}
                </p>
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className="social_container">
        <ExternalLink href="https://www.instagram.com/combat.24?igsh=MTIzZ2ZpN3V1dms2cA%3D%3D">
          <FaInstagram color={pathname !== "/" ? "black" : "white"} size={30} />
        </ExternalLink>
        <ExternalLink href="https://www.facebook.com/share/1659Y8bfk7/">
          <FaFacebook color={pathname !== "/" ? "black" : "white"} size={30} />
        </ExternalLink>
      </div>
    </div>
  );
};

export default Navbar;
