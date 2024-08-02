import React, { useState, useEffect } from 'react';
import './HomeStyles.css';
import image from "./phots/my.jpg";

const HomePage = () => {
  const [dynamicTextHii, setDynamicTextHii] = useState('');
  const [dynamicTextH1, setDynamicTextH1] = useState('');
  const [dynamicTextH2, setDynamicTextH2] = useState('');

  useEffect(() => {
    const textHii = "Hii There!";
    const textH1 = "I'M";
    const textH2 = "RANVEER SINGH KARNAWAT";

    let indexHii = 0;
    let indexH1 = 0;
    let indexH2 = 0;

    let intervalIdHii;
    let intervalIdH1;
    let intervalIdH2;

    intervalIdHii = setInterval(() => {
      setDynamicTextHii(textHii.substring(0, indexHii));

      indexHii = (indexHii + 1) % (textHii.length + 1);

      if (indexHii === 0) {
        clearInterval(intervalIdHii);

        intervalIdH1 = setInterval(() => {
          setDynamicTextH1(textH1.substring(0, indexH1));

          indexH1 = (indexH1 + 1) % (textH1.length + 1);

          if (indexH1 === 0) {
            clearInterval(intervalIdH1);

            intervalIdH2 = setInterval(() => {
              setDynamicTextH2(textH2.substring(0, indexH2));

              indexH2 = (indexH2 + 1) % (textH2.length + 1);

              if (indexH2 === 0) {
                clearInterval(intervalIdH2);
              }
            }, 100);
          }
        }, 100);
      }
    }, 100);

    return () => {
      clearInterval(intervalIdHii);
      clearInterval(intervalIdH1);
      clearInterval(intervalIdH2);
    };
  }, []);

  return (
    <div className="flexskills" style={{background:"linear-gradient(145deg, #1f1919, #241e1e)"}}>
      <div className="containskills">
        <div className="text-section">
          <h2 id="dynamicTextHii">{dynamicTextHii}</h2>
          <h1 id="dynamicTextH1">{dynamicTextH1}</h1>
          <h1 id="dynamicTextH2">{dynamicTextH2}</h1>
          <p>
            Dedicated web developer, C++ coder, and tech enthusiast driven by a
            passion for cutting‑edge technologies. Proficient in front‑end
            development, with expertise in HTML, CSS, JavaScript, C++, and Java.
            Strong leadership skills and a keen eye for detail. Committed to
            crafting efficient, scalable solutions that elevate user experiences
            and contribute for the betterment of the society and association.
          </p>
          <button
            type="button"
            onClick={() =>
              (window.location.href = "https://github.com/skranveer098")
            }
          >
            Rate me on Github
          </button>
        </div>
        {/* <div className="image-section">
          <img src={image} alt="Ranveer Singh Karnawat" />
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
