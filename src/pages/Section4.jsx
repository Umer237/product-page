import React from "react";
import "./Section4.css";

import pic1 from "./img/black-coffee.jpg";
import pic2 from "./img/Coffee.jpg";
import pic3 from "./img/Spoon-in-Coffee.jpg";
import pic4 from "./img/Biscuits.jpg";
import pic5 from "./img/Lemon-Juice.jpg";

const Section4 = () => {
  return (
    <>
      <div className="first-row">
        <div>
          <img src={pic1} alt="" />
        </div>
        <div>
          <h4>
            Today you'll find us at Edinburgh's Business Campus selling a fresh
            batch of our finest
          </h4>
        </div>
        <div>
          <img src={pic2} alt="" />
        </div>
        <div>
          <h4>
            Today you'll find us at Edinburgh's Business Campus selling a fresh
            batch of our finest
          </h4>
        </div>
        <div>
          <img src={pic3} alt="" />
        </div>
      </div>   
       <div className="second-row">
       <div>
          <h4>
            Today you'll find us at Edinburgh's Business Campus selling a fresh
            batch of our finest
          </h4>
        </div>
        <div>
          <img src={pic4} alt="" />
        </div>
          <div>
          <h4>
            Today you'll find us at Edinburgh's Business Campus selling a fresh
            batch of our finest
          </h4>
        </div>
        <div>
          <img src={pic5} alt="" />
        </div>
        <div>
          <h4>
            Today you'll find us at Edinburgh's Business Campus selling a fresh
            batch of our finest
          </h4>
        </div>
      </div>
    </>
  );
};

export default Section4;
