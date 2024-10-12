// HomePage.js
import Header from '../components/Header';
import React from 'react';
import BetaBar from '../components/HomePage/BetaBar'
import HeroSection from '../components/HomePage/HeroSection';
import CoursesSection from '../components/HomePage/CoursesSection';
import LibrarySection from '../components/HomePage/LibrarySection';
import WhyYouniverseSection from '../components/HomePage/WhyYouniverseSection';
import PartnersSection from '../components/HomePage/PartnersSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <BetaBar />
      <HeroSection />
      <CoursesSection />
      <LibrarySection />
      <WhyYouniverseSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default HomePage;
