import React, { useState, useEffect } from "react";
import image5 from "./phots/my.jpg";

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
    <div
      style={{
        position: "fixed",
        width: "20vw",
        height: "100vh",
        top: 0,
        left: 0,
        background: "#1e1e1e",
        color: "#fff",
        overflowY: "auto",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.5)",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "2rem"
      }}
      onClick={() => setOpenMenu(false)}
    >
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={image5}
          alt="Profile"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            marginBottom: "10px",
          }}
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
      <nav
        style={{
          width: "100%",
          textAlign: "center"
        }}
      >
        {["Home", "About Me", "Skills", "Projects", "Contact"].map(
          (text, index) => (
            <h1
              key={index}
              data-id={`section${index + 1}`}
              className={currentSection === `section${index + 1}` ? "active" : ""}
              onClick={() => scrollToSection(`section${index + 1}`)}
              style={{
                margin: 0,
                textDecoration: "none",
                color: currentSection === `section${index + 1}` ? "#ff9800" : "#ffffff",
                fontWeight: "bold",
                cursor: "pointer",
                padding: "0.5rem 0",
                marginBottom: "10px",
                fontSize: "1.2rem",
                transition: "all 0.3s ease",
                transform: currentSection === `section${index + 1}` ? "scale(1.1)" : "scale(1)",
                fontSize: currentSection === `section${index + 1}` ? "3rem" : "2.4rem"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#ff9800";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = currentSection === `section${index + 1}` ? "#ff9800" : "#ffffff";
                e.currentTarget.style.transform = currentSection === `section${index + 1}` ? "scale(1.1)" : "scale(1)";
              }}
            >
              {text}
            </h1>
          )
        )}
      </nav>
    </div>
  );
};

export default LeftScroll;
