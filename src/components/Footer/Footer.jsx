import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="gym">
            <h1>GYM<mark>24</mark></h1>
            <p>Build strength and confidence at our gym with state-of-the-art equipment, personalized training, and a motivating community</p>
        </div>
        <div className="address">
            <h2>Address</h2>
            <p>Republic of Belarus <br /> Minsk city <br /> Dzerzhinsky Avenue 15</p>
        </div>
        <div className="contact">
            <h2>Contact</h2>
            <p>+375 29 123-45-67 <br /> +375 29 987-65-43 <br /> info@gym24.by</p>
            <div className="contact-icon">
                <FaInstagram />
                <CiFacebook />
                <FaTwitter />
                <IoLogoYoutube />
            </div>
        </div>
    </div>
  )
}

export default Footer