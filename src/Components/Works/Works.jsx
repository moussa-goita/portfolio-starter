import React from 'react';
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";


const Works = () => {
  return (
    <div className="works">
        <div className='awesome'>
            <span>Works for all these</span>
            <span>Brands & Cliends</span>
            <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. iae vero 
                <br />
                nim suscipit voluptates. Optio suscipit numquam corporis?
                <br />
                nim suscipit voluptates. Optio suscipit numquam corporis?
                <br />
                nim suscipit voluptates. Op
            </span>

            <button className="button s-button">Hire me</button>
            <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="w-right">
          <div className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
          </div>
          {/* background circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works