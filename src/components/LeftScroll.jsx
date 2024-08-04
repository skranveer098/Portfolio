import React, { useState, useEffect } from "react";
import image5 from "./phots/my.jpg";
import './LeftScroll.css';

const LeftScroll = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 5) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    setCurrentSection(sectionId);

    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className={`left-scroll ${openMenu ? "open" : ""}`} onClick={() => setOpenMenu(false)}>
      <div className="profile-image-container">
        <img
          src={image5}
          alt="Profile"
          className="profile-image"
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
          }}
        />
      </div>
      <nav className="nav-menu">
        {["Home", "About Me", "Skills", "Projects", "Contact"].map(
          (text, index) => (
            <h1
              key={index}
              data-id={`section${index + 1}`}
              className={currentSection === `section${index + 1}` ? "active" : ""}
              onClick={() => scrollToSection(`section${index + 1}`)}
            >
              {text}
            </h1>
          )
        )}
      </nav>
      <button className="menu-toggle" onClick={() => setOpenMenu(!openMenu)}>
        ☰
      </button>
    </div>
  );
};

export default LeftScroll;
