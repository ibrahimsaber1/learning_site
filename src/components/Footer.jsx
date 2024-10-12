import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-waves">
        <svg viewBox="0 0 120 28">
          <defs>
            <mask id="xxx">
              <circle cx="7" cy="12" r="40" fill="#fff" />
            </mask>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 13 -9"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
            <path
              id="wave"
              d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
            />
          </defs>

          <use id="wave3" className="wave" xlinkHref="#wave" x="0" y="-2" />
          <use id="wave2" className="wave" xlinkHref="#wave" x="0" y="0" />
          <use id="wave1" className="wave" xlinkHref="#wave" x="0" y="1" />
        </svg>
      </div>

      <div className="footer-nav">
        <a href="#">Features</a>
        <a href="#">Library</a>
        <a href="#">Pricing</a>
        <a href="#">Legal Use</a>
        <a href="#">Behind the scene</a>
      </div>
    </footer>
  );
};

export default Footer;
