import React from 'react';

const RecipeCard = (props) => {

  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div
            className="back-content"
            style={{
              backgroundImage: `url(${props.image})`,
              backgroundSize: "cover", // Adjust the background size as needed
              backgroundPosition: "center", // Adjust the background position as needed
              height: "220px", // Set a specific height for the container
              borderRadius: "8px",
            }}
          >
            <svg
              stroke="#ffffff"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              height="50px"
              width="150px"
              fill="#ffffff"
            >
              {/* ... (SVG content) */}
            </svg>
            <strong>MORE</strong>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>
          <div className="front-content">
            <small className="badge">
              <a
                href={props.view}
                className="linking"
                rel="noreferrer"
                target="_blank"
              >
                view
              </a>
            </small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{props.name}</strong>
                </p>
                {/* <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0,0,256,256"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g style={{ mixBlendMode: 'normal' }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray="" strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt" strokeWidth="1" stroke="none" fillRule="nonzero" fill="#20c997">
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg> */}
              </div>
              <p className="card-footer">
                <a href={props.github}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    width="10px"
                    height="10px"
                    alt=""
                  />
                </a>{" "}
                &nbsp; | &nbsp; {props.techStack}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
