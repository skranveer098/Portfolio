import React from "react";
import "./projects.css";
import Cards from "./Cards.jsx";
import FlavourSprint from "./phots/FoodSprint.png";
import BookInventory from "./phots/BookInventory.png";
import ImageApp from "./phots/mys.png";
import ICMMMI from "./phots/icmmmi.png";
import Portfolio from "./phots/MyPortfolio.png";

const Projects = () => {
  return (
    <div className="flexproject" style={{background:"linear-gradient(145deg, #1f1919, #241e1e)"}}>
      <div className="containproject" >
        <h1 id="hproject" style={{color:'aliceblue'}}>Project</h1>
        <p style={{color:'aliceblue'}}>
          Designed and implemented an e-commerce platform using React and
          Node.js, enhancing user experience through responsive design and
          seamless checkout processes. Successfully integrated third-party APIs
          for payment processing, resulting in a 20% increase in conversion
          rates. Employed agile methodologies to collaborate with
          cross-functional teams and deliver the project ahead of schedule.
        </p>
        <div className="boxcontainerp" style={{background:"linear-gradient(145deg, #1f1919, #241e1e)"}}>
          <div className="boxp">
          <Cards
              image={BookInventory}
              name="Book Inventory App"
              view="https://book-inventory-j3sf.vercel.app/"
              github="https://github.com/skranveer098/BookInventory"
              techStack="HTML CSS JS"
            />
            <Cards
              image={FlavourSprint}
              name="Flavour Sprint App"
              view="https://flavour-sprint-pvsq.vercel.app/"
              github="https://github.com/skranveer098/FlavourSprint"
              techStack="HTML CSS JS"
            />
            <Cards
              image={Portfolio}
              name="My Portfolio "
              view="https://65b4102b4d919a0a42bf536e--gorgeous-creponne-3cae51.netlify.app/"
              github="https://github.com/skranveer098/Portfolio"
              techStack="HTML CSS JS"
            />
            <Cards
              image={ImageApp}
              name="Image Search App"
              view="https://superlative-nasturtium-62d5ad.netlify.app"
              github="https://github.com/skranveer098/Image-Search-App.git"
              techStack="HTML CSS JS"
            />
            <Cards
              image={ICMMMI}
              name="ICMMMI Website"
              view="https://icmmmi.in/"
              github="https://github.com/shubham691438/ICMMMI"
              techStack="HTML CSS JS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
