import React from "react";
import "./projects.css";
import Cards from "./Cards.jsx";
import image1 from "./phots/mys.png";
import image2 from "./phots/icmmmi.png";
import image3 from "./phots/portfolio.png";

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
              image={image1}
              name="Image Search App"
              view="https://superlative-nasturtium-62d5ad.netlify.app"
              github="https://github.com/skranveer098/Image-Search-App.git"
              techStack="HTML CSS JS"
            />
            <Cards
              image={image2}
              name="ICMMMI Website"
              view="www.icmmmi.in"
              github="https://github.com/shubham691438/ICMMMI"
              techStack="HTML CSS JS"
            />
            <Cards
              image={image3}
              name="My Portfolio Website"
              view="https://65b4102b4d919a0a42bf536e--gorgeous-creponne-3cae51.netlify.app/"
              github="https://github.com/skranveer098/My_Portfolio.git"
              techStack="HTML CSS JS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
