import React from 'react'
import  './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left" >
            <div className="n-name" >Moussa Mètanga GOITA</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
             <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experiences</li>
                    <li>Portofolio</li>
                    <li>Testimonials</li>
                </ul>
             </div>
             <button className="button">
                Contact us  
             </button>
        </div>
    </div>
  )
}

export default Navbar