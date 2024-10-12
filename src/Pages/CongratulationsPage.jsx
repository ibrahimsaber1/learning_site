// CongratulationsPage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CongratulationsPage.css';

const CongratulationsPage = () => {
  return (
    <div className="congrats-background d-flex align-items-center justify-content-center">
      <div className="text-center">
        <img src="/assets/celebration.png" alt="Celebration Animation" className="celebration-gif" />
        <h2 className="text-white mb-4">CONGRATULATIONS! YOU'RE NOW A YOUNIVERSE ENTITY</h2>
        <button className="btn btn-primary btn-lg">Join The Youniverse</button>
      </div>
    </div>
  );
};

export default CongratulationsPage;
