import React from 'react'
import'./Services.css'
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import Card from '../Card/Card';
const Services = () => {
  return (
    <div className='services'>
        {/* left side */}
        <div className='awesome'>
            <span>My awesome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum pariatur nobis odit fugit, asperiores voluptatem aperiam culpa incidunt nesciunt, eos id molestiae vero 
                <br />
                nim suscipit voluptates. Optio suscipit numquam corporis?
            </span>
            <button className="button s-button">Télécharger CV</button>
            <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* left side */}
        <div className='cards'>
            <Card
            emoji ={'HeartEmoji'}
            heading = {'Design'}
            detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
            />
        </div>
    </div>
  )
}

export default Services