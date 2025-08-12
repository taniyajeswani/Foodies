import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe velit accusamus delectus sint iste sunt, repudiandae tempora odio sequi ullam dolore quae blanditiis deleniti quasi voluptates, aperiam tempore eaque ab.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About-us</li>
                    <li>Delivery</li>
                    <li>Priacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@foodies.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            © 2025 Foodies.com. All rights reserved.
        </p>
    </div>
  )
}

export default Footer
