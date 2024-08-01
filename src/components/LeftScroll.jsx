import React, { useState, useEffect } from "react";
import "./LeftScroll.css";
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
          // console.log("section.getAttribute('data-id')",section.id)
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
      className={openMenu ? "container1" : "container"}
      onClick={() => setOpenMenu(false)}
    >
      <div className="image">
        <img
          src={image5}
          alt="bruhh"
          className="Image"
        />
      </div>
      <nav className="headings">
        <h1
          data-id="section1"
          style={{ fontSize: currentSection === "section1" ? "3rem" : "2em" }}
          onClick={() => scrollToSection("section1")}
        >
          Home
        </h1>
        <h1
          data-id="section2"
          style={{ fontSize: currentSection === "section2" ? "3rem" : "2em" }}
          onClick={() => scrollToSection("section2")}
        >
          About Me
        </h1>
        <h1
          data-id="section3"
          style={{ fontSize: currentSection === "section3" ? "3rem" : "2em" }}
          onClick={() => scrollToSection("section3")}
        >
          Skills
        </h1>
        <h1
          data-id="section4"
          style={{ fontSize: currentSection === "section4" ? "3rem" : "2em" }}
          onClick={() => scrollToSection("section4")}
        >
          Projects
        </h1>
        <h1
          data-id="section5"
          style={{ fontSize: currentSection === "section5" ? "3rem" : "2em" }}
          onClick={() => scrollToSection("section5")}
        >
          Contact
        </h1>
      </nav>
    </div>
  );
};

export default LeftScroll;
