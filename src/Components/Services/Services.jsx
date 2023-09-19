import React from 'react'
import'./Services.css'
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import Card from '../Card/Card';
import Resume from './resume.pdf'
const Services = () => {
  return (
    <div className='services'>
        {/* left side */}
        <div className='awesome'>
            <span>My awesome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. iae vero 
                <br />
                nim suscipit voluptates. Optio suscipit numquam corporis?
            </span>
            <a href={Resume} download>
            <button className="button s-button">Télécharger CV</button>
            </a>
            <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* first Cards */}
        <div className='cards'>
        <div style={{left:"14rem"}}>
            <Card
            emoji ={Heartemoji}
            heading = {'Design'}
            detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
            />
        </div>
        {/* second Cards */}
        <div style={{top:"12rem", left:"-4rem"}}>
            <Card
            emoji ={Glasses}
            heading = {'Devloper'}
            detail = {"Html, Css, JavaScript, React"}
            />
        </div>
        {/* 3rd Cards */}
        <div style={{top:"19rem", left:"12rem"}}>
            <Card
            emoji ={Humble}
            heading = {'UI/UX'}
            detail = {"Lorem up"}
            />
        </div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services