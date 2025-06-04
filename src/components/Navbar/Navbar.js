import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ExternalLink } from "../../utils/utils";
import { HiMenu } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const isWhiteNav = pathname !== "/" && pathname !== "/about";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup on unmount
    };
  }, [menuOpen]);

  const navLinks = [
    {
      id: 2,
      path: null,
      text: "About",
      sublinks: [
        { id: 1, path: "/about", text: "Our Story" },
        { id: 2, path: "/coaches", text: "Coaches" },
        { id: 3, path: "/classes", text: "Classes" },
        // { id: 4, path: "/gallery", text: "Gallery" },
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
    // {
    //   id: 4,
    //   path: "/merch",
    //   text: "Merchandise",
    // },
  ];

  return (
    <>
      <div
        className={`navbar_container ${
          (pathname === "/" || pathname === "/about") && scrolled
            ? "scrolled"
            : isWhiteNav
            ? "scrollwhite"
            : ""
        }`}
      >
        <Link to="/">
          <h2
            className="Anton header_title"
            style={{ color: isWhiteNav && "black" }}
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
                    <p className="nue" style={{ color: isWhiteNav && "black" }}>
                      {link.text}
                    </p>
                  </div>
                  <div
                    className="dropdown_menu"
                    style={{
                      backgroundColor: isWhiteNav ? "black" : "white",
                      color: isWhiteNav ? "white" : "black",
                    }}
                  >
                    {link.sublinks.map((sublink) => (
                      <Link
                        to={sublink.path}
                        key={sublink.id}
                        className={`dropdown_item nue ${isWhiteNav && "black"}`}
                      >
                        {sublink.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={link.path}>
                  <p className="nue" style={{ color: isWhiteNav && "black" }}>
                    {link.text}
                  </p>
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="social_container">
          <ExternalLink href="https://www.instagram.com/combat.24?igsh=MTIzZ2ZpN3V1dms2cA%3D%3D">
            <FaInstagram color={isWhiteNav ? "black" : "white"} size={30} />
          </ExternalLink>
          <ExternalLink href="https://www.facebook.com/share/1659Y8bfk7/">
            <FaFacebook color={isWhiteNav ? "black" : "white"} size={30} />
          </ExternalLink>
        </div>
      </div>

      <div
        className={`mobile_nav_container ${
          (pathname === "/" || pathname === "/about") && scrolled
            ? "scrolled"
            : isWhiteNav
            ? "scrollwhite"
            : ""
        }`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <h2
            className="Anton header_title"
            style={{ color: isWhiteNav && "black" }}
          >
            COMBAT 24
          </h2>
        </Link>
        {menuOpen ? (
          <RiCloseLargeFill
            color={isWhiteNav ? "black" : "white"}
            size={25}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          <HiMenu
            color={isWhiteNav ? "black" : "white"}
            size={25}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
      </div>

      <div
        className={`mobile_menu ${
          pathname === "/" || pathname === "/about" ? "bgBlack" : ""
        }`}
        style={{
          left: menuOpen ? "0" : "-100%",
        }}
      >
        {navLinks.map((link) => (
          <div key={link.id} className="mobile_nav_item">
            {link.path ? (
              <Link to={link.path} onClick={() => setMenuOpen(false)}>
                <h3
                  className={`Anton main_link ${
                    pathname === "/" || pathname === "/about"
                      ? "colorWhite"
                      : ""
                  }`}
                >
                  {link.text}
                </h3>
              </Link>
            ) : (
              <div className="dropdown_group">
                <h3
                  className={`Anton main_link ${
                    pathname === "/" || pathname === "/about"
                      ? "colorWhite"
                      : ""
                  }`}
                >
                  {link.text}
                </h3>
                <div className="sublink_container">
                  {link.sublinks?.map((sublink) => (
                    <Link
                      key={sublink.id}
                      to={sublink.path}
                      className={`nue sub_link ${
                        pathname === "/" || pathname === "/about"
                          ? "colorWhite"
                          : ""
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {sublink.text}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="social_container_mob">
          <ExternalLink href="https://www.instagram.com/combat.24?igsh=MTIzZ2ZpN3V1dms2cA%3D%3D">
            <FaInstagram color={isWhiteNav ? "black" : "white"} size={30} />
          </ExternalLink>
          <ExternalLink href="https://www.facebook.com/share/1659Y8bfk7/">
            <FaFacebook color={isWhiteNav ? "black" : "white"} size={30} />
          </ExternalLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
