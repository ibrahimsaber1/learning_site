// PartnersSection.js
import React from 'react';
import '../../styles/HomePage/PartnersSection.css';

const PartnersSection = () => {
  return (
    <section className="partners-section text-center">
      <h2 className="section-title">HEAR FROM <span className="highlight">OUR PARTNERS</span></h2>
      <p className="section-subtitle">THIS IS HOW FAR BETTER OUR PLATFORM IS...</p>
      <div className="testimonials">
        <div className="testimonial">
          <div className="quote-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
              <path d="M10.24 3.71A7 7 0 000 10v2.18a4 4 0 004 4h4.62a2 2 0 002-2V10a6 6 0 00-1.64-4.29zM14.64 17.12H8.68a3 3 0 01-3-3V10a5 5 0 011.36-3.58A7 7 0 0114.68 3.71V10h4.62a4 4 0 00-4 4V10h-4.6a2 2 0 00-2 2v4.89a7 7 0 007 7z"/>
            </svg>
          </div>
          <blockquote>
            "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis semper at et odio."
          </blockquote>
          <p className="testimonial-author">John Doe</p>
          <p className="testimonial-role">CEO of company.com</p>
        </div>

        <div className="testimonial">
          <div className="quote-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
              <path d="M10.24 3.71A7 7 0 000 10v2.18a4 4 0 004 4h4.62a2 2 0 002-2V10a6 6 0 00-1.64-4.29zM14.64 17.12H8.68a3 3 0 01-3-3V10a5 5 0 011.36-3.58A7 7 0 0114.68 3.71V10h4.62a4 4 0 00-4 4V10h-4.6a2 2 0 00-2 2v4.89a7 7 0 007 7z"/>
            </svg>
          </div>
          <blockquote>
            "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis semper at et odio."
          </blockquote>
          <p className="testimonial-author">Jane Doe</p>
          <p className="testimonial-role">CEO of company.org</p>
        </div>


      <div className="testimonial">
          <div className="quote-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
              <path d="M10.24 3.71A7 7 0 000 10v2.18a4 4 0 004 4h4.62a2 2 0 002-2V10a6 6 0 00-1.64-4.29zM14.64 17.12H8.68a3 3 0 01-3-3V10a5 5 0 011.36-3.58A7 7 0 0114.68 3.71V10h4.62a4 4 0 00-4 4V10h-4.6a2 2 0 00-2 2v4.89a7 7 0 007 7z"/>
            </svg>
          </div>
          <blockquote>
            "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis semper at et odio."
          </blockquote>
          <p className="testimonial-author">Jane Doe</p>
          <p className="testimonial-role">CEO of company.org</p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
