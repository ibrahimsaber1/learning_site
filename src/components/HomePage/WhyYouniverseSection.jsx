// WhyYouniverseSection.jsx
import React from 'react';
import '../../styles/HomePage/WhyYouniverseSection.css';

const WhyYouniverseSection = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-text">
          <div className='why-header'>
          <h2 className="why-title">WHY YOUNIVERSE?</h2>
          <p className="why-description">THIS IS HOW FAR BETTER OUR PLATFORM IS...</p>
          </div>
          {/* List of qualities */}
          <div className='qualities '>
          <ul className="qualities-list">
            <li className="quality-item">
              <div className="quality-icon"><span className='ORI-icon'>ORI</span>GINALITY</div>
              <div className="quality-description">THIS IS HOW FAR BETTER OUR PLATFORM IS...</div>
            </li>
            <li className="quality-item">
            <div className="quality-icon"><span className='ORI-icon'>ORI</span>GINALITY</div>
            <div className="quality-description">THIS IS HOW FAR BETTER OUR PLATFORM IS...</div>
            </li>
            <li className="quality-item">
            <div className="quality-icon"><span className='ORI-icon'>ORI</span>GINALITY</div>
            <div className="quality-description">THIS IS HOW FAR BETTER OUR PLATFORM IS...</div>
            </li>
            <li className="quality-item">
            <div className="quality-icon"><span className='ORI-icon'>ORI</span>GINALITY</div>
            <div className="quality-description">THIS IS HOW FAR BETTER OUR PLATFORM IS...</div>
            </li>
            <li className="quality-item">
            <div className="quality-icon"><span className='ORI-icon'>ORI</span>GINALITY</div>
            <div className="quality-description">THIS IS HOW FAR BETTER OUR PLATFORM IS...</div>
            </li>
          </ul>
          </div>
        </div>

        {/* Image section */}
        <div className="why-image">
          <img src="public/assets/education-group.png" alt="Youniverse Education Group" />
        </div>
      </div>
    </section>
  );
};

export default WhyYouniverseSection;
