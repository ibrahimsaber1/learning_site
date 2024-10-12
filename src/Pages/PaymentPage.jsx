// PaymentPage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/PaymentPage.css';
import { FaUser, FaCreditCard, FaCalendarAlt, FaLock } from 'react-icons/fa';

const PaymentPage = () => {
  return (
    <div className="payment-background d-flex align-items-center justify-content-center">
      <div className="container my-5 pay-container position-relative z-index-custom">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="credit-card shadow-lg p-4 rounded bg-gradient text-white">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="chip"></div>
                <img src="/assets/mastercard.png" alt="MasterCard Logo" width="50" />
              </div>
              <div className="card-number mb-3">**** **** **** 9973</div>
              <div className="d-flex justify-content-between">
                <div>
                  <small>Card Holder</small>
                  <div className="card-holder-name">Ibrahim Saber</div>
                </div>
                <div>
                  <small>Expires</small>
                  <div className="card-expiry">06/22</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8 col-lg-6">
            <div className="payment-form bg-white p-5 rounded shadow-lg">
              <h4 className="mb-4 text-center">Payment Details</h4>
              <form>
                <div className="form-group mb-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white border-right-0"><FaUser /></span>
                    </div>
                    <input type="text" className="form-control form-control-lg border-left-0" placeholder="Card Holder Name" required />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white border-right-0"><FaCreditCard /></span>
                    </div>
                    <input type="text" className="form-control form-control-lg border-left-0" placeholder="Card Number" required />
                  </div>
                </div>
                <div className="form-row mb-4">
                  <div className="col">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white border-right-0"><FaCalendarAlt /></span>
                      </div>
                      <input type="text" className="form-control form-control-lg border-left-0" placeholder="Expiration Date" required />
                    </div>
                  </div>
                </div>
                <div className="form-row mb-4">
                  <div className="col">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white border-right-0"><FaLock /></span>
                      </div>
                      <input type="text" className="form-control form-control-lg border-left-0" placeholder="Security Code" required />
                    </div>
                  </div>
                </div>
                <div className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" value="" id="termsCheck" required />
                  <label className="form-check-label" htmlFor="termsCheck">
                    I accept the <a href="#" className="text-primary">Terms of Service</a> & <a href="#" className="text-primary">Privacy Policy</a>
                  </label>
                </div>
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-success btn-lg">Make Payment</button>
                  <button type="button" className="btn btn-outline-danger btn-lg">Return to Free Trial</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
