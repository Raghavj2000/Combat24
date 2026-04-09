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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    {
      id: 2,
      path: null,
      text: "About",
      sublinks: [
        { id: 1, path: "/about", text: "Our Story" },
        { id: 3, path: "/classes", text: "Classes" },
      ],
    },
    { id: 1, path: "/schedule", text: "Schedule" },
    { id: 3, path: "/contact",  text: "Contact" },
  ];

  const navClass = `navbar_container${
    (pathname === "/" || pathname === "/about") && scrolled
      ? " scrolled"
      : isWhiteNav
      ? " scrollwhite"
      : ""
  }`;

  const mobileNavClass = `mobile_nav_container${
    (pathname === "/" || pathname === "/about") && scrolled
      ? " scrolled"
      : isWhiteNav
      ? " scrollwhite"
      : ""
  }`;

  const iconColor = isWhiteNav ? "black" : "white";

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <header className={navClass} role="banner">
        <Link to="/" aria-label="Combat 24 — Home">
          <h2 className="Anton header_title">COMBAT 24</h2>
        </Link>

        <nav className="nav_container" aria-label="Main navigation">
          {navLinks.map((link) => (
            <div className="nav_link_item" key={link.id}>
              {link.sublinks ? (
                <div className="dropdown" role="navigation" aria-label="About submenu">
                  <div className="dropdown_trigger" tabIndex={0} aria-haspopup="true">
                    <p
                      className={`nue${
                        link.sublinks.some((s) => s.path === pathname) ? " active-link" : ""
                      }`}
                      style={{ color: isWhiteNav ? "black" : undefined }}
                    >
                      {link.text}
                    </p>
                  </div>
                  <div className="dropdown_menu" role="menu">
                    {link.sublinks.map((sublink) => (
                      <Link
                        to={sublink.path}
                        key={sublink.id}
                        className="dropdown_item nue"
                        role="menuitem"
                        style={{ color: isWhiteNav ? "#333" : undefined }}
                      >
                        {sublink.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={link.path} aria-current={pathname === link.path ? "page" : undefined}>
                  <p
                    className={`nue${pathname === link.path ? " active-link" : ""}`}
                    style={{ color: isWhiteNav ? "black" : undefined }}
                  >
                    {link.text}
                  </p>
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="social_container">
          <ExternalLink
            href="https://www.instagram.com/combat.24?igsh=MTIzZ2ZpN3V1dms2cA%3D%3D"
            aria-label="Follow Combat 24 on Instagram"
          >
            <FaInstagram color={iconColor} size={26} />
          </ExternalLink>
          <ExternalLink
            href="https://www.facebook.com/share/1659Y8bfk7/"
            aria-label="Follow Combat 24 on Facebook"
          >
            <FaFacebook color={iconColor} size={26} />
          </ExternalLink>
        </div>
      </header>

      {/* ── Mobile Navbar ── */}
      <div className={mobileNavClass} role="banner">
        <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Combat 24 — Home">
          <h2 className="Anton header_title">COMBAT 24</h2>
        </Link>
        <button
          className="mobile_menu_toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{ background: "none", border: "none", padding: "8px", cursor: "pointer" }}
        >
          {menuOpen ? (
            <RiCloseLargeFill color={iconColor} size={24} />
          ) : (
            <HiMenu color={iconColor} size={26} />
          )}
        </button>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      <nav
        id="mobile-menu"
        className={`mobile_menu${pathname === "/" || pathname === "/about" ? " bgBlack" : ""}`}
        style={{ left: menuOpen ? "0" : "-100%" }}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <div key={link.id} className="mobile_nav_item">
            {link.path ? (
              <Link to={link.path} onClick={() => setMenuOpen(false)}>
                <h3
                  className={`Anton main_link${
                    pathname === "/" || pathname === "/about" ? " colorWhite" : ""
                  }${pathname === link.path ? " active-link" : ""}`}
                >
                  {link.text}
                </h3>
              </Link>
            ) : (
              <div className="dropdown_group">
                <h3
                  className={`Anton main_link${
                    pathname === "/" || pathname === "/about" ? " colorWhite" : ""
                  }`}
                >
                  {link.text}
                </h3>
                <div className="sublink_container">
                  {link.sublinks?.map((sublink) => (
                    <Link
                      key={sublink.id}
                      to={sublink.path}
                      className={`nue sub_link${
                        pathname === "/" || pathname === "/about" ? " colorWhite" : ""
                      }${pathname === sublink.path ? " active-link" : ""}`}
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
          <ExternalLink
            href="https://www.instagram.com/combat.24?igsh=MTIzZ2ZpN3V1dms2cA%3D%3D"
            aria-label="Follow Combat 24 on Instagram"
          >
            <FaInstagram color={iconColor} size={28} />
          </ExternalLink>
          <ExternalLink
            href="https://www.facebook.com/share/1659Y8bfk7/"
            aria-label="Follow Combat 24 on Facebook"
          >
            <FaFacebook color={iconColor} size={28} />
          </ExternalLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
