import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/use-theme";
import { FiSun, FiMoon, FiHome, FiUser, FiGrid } from "react-icons/fi";
import Clock from "../components/Clock";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 768
  );

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const isMobile = windowWidth <= 768;
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Desktop header */}
      {!isMobile && (
        <header
          className="navbar"
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 100,
            padding: "0 1rem",
            height: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "var(--transition)",
          }}
        >
          <div
            className="logo"
            style={{
              position: "absolute",
              left: 16,
              fontFamily: "var(--font-mono)",
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "var(--accent-color)",
            }}
          >
            <a href="/">0x4nku5h</a>
          </div>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                position: "static",
                margin: 0,
                background:
                  theme === "light"
                    ? "rgba(255,255,255,0.92)"
                    : "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border:
                  theme === "light"
                    ? "1px solid rgba(0,0,0,0.06)"
                    : "1px solid rgba(255,255,255,0.15)",
                boxShadow:
                  theme === "light"
                    ? "0 6px 18px rgba(0,0,0,0.12)"
                    : "0 8px 24px rgba(0,0,0,0.2)",
                borderRadius: "9999px",
                minWidth: 320,
                height: "48px",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 8px",
                gap: "4px",
              }}
              className="nav-links"
            >
              {/* Home icon button */}
              <li style={{ padding: "6px" }}>
                <Link
                  to="/"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9999,
                    display: "grid",
                    placeItems: "center",
                    background:
                      theme === "light" ? "#efefef" : "rgba(0,0,0,0.08)",
                    color: "var(--text-color)",
                  }}
                >
                  <FiHome />
                </Link>
              </li>

              {/* separator */}
              <li
                aria-hidden
                style={{
                  width: 1,
                  height: 24,
                  background:
                    theme === "light"
                      ? "rgba(0,0,0,0.08)"
                      : "rgba(255,255,255,0.15)",
                }}
              />

              {/* About */}
              <li>
                <Link
                  to="/about"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    borderRadius: 9999,
                  }}
                >
                  <FiUser /> <span>About</span>
                </Link>
              </li>

              {/* Work */}
              <li>
                <Link
                  to="/work"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    borderRadius: 9999,
                  }}
                >
                  <FiGrid /> <span>Work</span>
                </Link>
              </li>

              {/* separator */}
              <li
                aria-hidden
                style={{
                  width: 1,
                  height: 24,
                  background:
                    theme === "light"
                      ? "rgba(0,0,0,0.08)"
                      : "rgba(255,255,255,0.15)",
                }}
              />

              {/* Theme toggle inside pill */}
              <li>
                <button
                  aria-label="Toggle theme"
                  onClick={toggleTheme}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9999,
                    display: "grid",
                    placeItems: "center",
                    background:
                      theme === "light" ? "#efefef" : "rgba(0,0,0,0.08)",
                    color: "var(--text-color)",
                    border: "none",
                  }}
                >
                  {theme === "light" ? <FiMoon /> : <FiSun />}
                </button>
              </li>
            </ul>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                position: "absolute",
                right: 16,
              }}
            >
              <div aria-label="Clock" style={{ fontSize: 12, opacity: 0.85 }}>
                <Clock />
              </div>
            </div>
          </nav>
        </header>
      )}

      {/* Mobile bottom navigation */}
      {isMobile && (
        <nav
          style={{
            position: "fixed",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              margin: 0,
              listStyle: "none",
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              borderRadius: "20px",
              height: "56px",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 12px",
              gap: "6px",
              minWidth: "280px",
            }}
            className="nav-links-mobile"
          >
            {/* Home icon button */}
            <li style={{ padding: "4px" }}>
              <Link
                to="/"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9999,
                  display: "grid",
                  placeItems: "center",
                  background: "#f5f5f5",
                  color: "#333",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <FiHome size={20} />
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                to="/about"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 14px",
                  borderRadius: 9999,
                  color: "#333",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "500",
                  transition: "all 0.2s ease",
                }}
              >
                <FiUser size={18} /> <span>About</span>
              </Link>
            </li>

            {/* Work */}
            <li>
              <Link
                to="/work"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 14px",
                  borderRadius: 9999,
                  color: "#333",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "500",
                  transition: "all 0.2s ease",
                }}
              >
                <FiGrid size={18} /> <span>Work</span>
              </Link>
            </li>

            {/* Theme toggle inside pill */}
            <li style={{ padding: "4px" }}>
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9999,
                  display: "grid",
                  placeItems: "center",
                  background: "#f5f5f5",
                  color: "#333",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
