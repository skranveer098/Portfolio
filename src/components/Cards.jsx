import React from 'react';
import './cards.css'; // Make sure this file contains the relevant CSS for the card styling

const Cards = ({ image, name, view, github, techStack }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <div className="textBox">
        <p className="text head">{name}</p>
        <a href={github} target="_blank" rel="noopener noreferrer" className="linking">GitHub</a>
        <a href={view} target="_blank" rel="noopener noreferrer" className="linking">View</a>
      </div>
    </div>
  );
};

export default Cards;
