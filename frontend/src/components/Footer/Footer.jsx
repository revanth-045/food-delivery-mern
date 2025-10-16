import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Tomato Logo" />
          <p>
            Hi, I’m <strong>Chinthala Revanth Reddy</strong> — a passionate
            full-stack developer who built this <strong>Food Delivery MERN App</strong> 
            to explore how modern web technologies connect users, restaurants, and 
            admins seamlessly. This project is developed using React.js, Node.js, 
            Express.js, MongoDB, and integrated with Stripe for secure online payments.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <a
              href="https://www.linkedin.com/in/revanth-reddy-chinthala-661794334"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+92-308-4900522</li>
            <li>revanthreddych063@gmail.com</li>
            <li>
              <a
                href="https://www.linkedin.com/in/revanth-reddy-chinthala-661794334"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2025 Tomato.com — Designed & Developed by Chinthala Revanth Reddy.
      </p>
    </div>
  );
};

export default Footer;
