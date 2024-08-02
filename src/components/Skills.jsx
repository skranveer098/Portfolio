import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";


import './skills.css';

const Skills = () => {
  return (
    <div className="flexskills" style={{background:"linear-gradient(145deg, #1f1919, #241e1e)"}}>
      <div className="containskills" style={{ color: "white"}}>
        <h1 id="hskills" style={{ color: "white" }}>Skills</h1>
        <p>Myself Ranveer Singh Karnawat from Rajasthan. I am interested in the domain of
Web and Software Developer with experience in tech Stacks like ReactJS . Proven track record in my projects. Seeking a challenging role to leverage technical expertise.
</p>
        <div className='boxcontainer'>
          <div className='box'>
            <FaHtml5 size='50%'/>
            HTML5
          </div>
          <div className='box'>
            <FaCss3Alt size='50%'/>
            CSS3
          </div>
          <div className='box'>
            <FaJs size='50%'/>
            JAVASCRIPT
          </div>
          <div className='box'>
            <IoLogoReact size='50%'/>
            REACT JS
          </div>
          <div className='box'>
            <FaGithub size='50%'/>
            GIT HUB
          </div>
          <div className='box'>
            <img src="https://cdn.icon-icons.com/icons2/3397/PNG/512/plus_c_icon_214370.png" alt="c++" id="cpp" style={{objectFit:"contain", borderRadius:"10px"}}/>
            C++
          </div>
          <div className='box'>
            <FaBootstrap size='50%'/>
            BOOTSTRAP
          </div>
          <div className='box'>
            <img src="https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1664-edw9bz9l.png" alt="c++" id="cpp" style={{objectFit:"contain", borderRadius:"10px"}}/>
            MATERIAL UI
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
