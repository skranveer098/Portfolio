import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'; // Correct import
import HomePage from './HomePage.jsx';
import AboutMe from './AboutMe.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ComputerIcon from '@mui/icons-material/Computer';
import SendIcon from '@mui/icons-material/Send';
import './Main.css';

const sections = [
  { id: 'section1', component: <HomePage />, icon: <HomeIcon /> },
  { id: 'section2', component: <AboutMe />, icon: <PersonIcon /> },
  { id: 'section3', component: <Skills />, icon: <HomeRepairServiceIcon /> },
  { id: 'section4', component: <Projects />, icon: <ComputerIcon /> },
  { id: 'section5', component: <Contact />, icon: <SendIcon /> },
];

const Main = () => {
  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');
    scrollContainer.innerHTML = '';

    sections.forEach(({ id, icon }) => {
      const scrollButton = (
        <IconButton key={id} onClick={() => scrollToSection(id)}>
          {icon}
        </IconButton>
      );

      scrollContainer.appendChild(document.createElement('div'));
      ReactDOM.render(scrollButton, scrollContainer.lastChild);
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div >
      <div id="scroll-container" ></div>
      {sections.map(({ id, component }) => (
        <div key={id} id={id} className="section section1">
          {component}
        </div>
      ))}
    </div>
  );
};

export default Main;
