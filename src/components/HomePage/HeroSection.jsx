// HeroSection.js
import React from 'react';
import '../../styles/HomePage/HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section hero-background" >
            <div className="hero-text">
                <h1>YOUNI<span className="highlight">VERSE</span></h1>
                <h4>NOT YOUR USUAL <span className="highlight">YOUTUBE NIGHT</span></h4>
            </div>
            <div className="hero-image">
                <img src="assets/ins.png" alt="Mentor Image" />
            </div>
        </section>
    );
};

export default HeroSection;