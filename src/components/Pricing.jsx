// Pricing.js
import React from 'react';
import '../styles/style.css'; 

const Pricing = () => {
  return (
    <div className="signup-background d-flex align-items-center justify-content-center ">
      <div className="container text-center my-5 position-relative z-index-custom">
        <div className="promo-message mb-5"> 
          <span className="text-black promo-text"> 
            START YOUR 1-MONTH FREE TRIAL. CANCEL ANYTIME
          </span>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card card-custom shadow-sm border-0 bg-white text-black">
              <div className="card-header bg-success text-white">Save 51%</div>
              <div className="card-body">
                <h5 className="card-title">Annually</h5>
                <p className="card-text">1-month free trial then EGP 499/month</p>
                <button className="btn btn-primary w-100">Try for free</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card-custom shadow-sm border-0 bg-white text-black">
              <div className="card-header bg-light text-dark">&nbsp;</div>
              <div className="card-body">
                <h5 className="card-title">Monthly</h5>
                <p className="card-text">1-month free trial then EGP 549/month</p>
                <button className="btn btn-primary w-100">Try for free</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
