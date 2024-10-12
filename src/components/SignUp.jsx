import React from 'react';
import '../styles/style.css';

const SignUp = () => {
  return (
    <div className="signup-background">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card-signup  p-4 shadow-lg" style={{ maxWidth: '600px' }}>
          <h2 className="text-center text-primary mb-3">YOUNI<span className="highlight">VERSE</span></h2>
          <p className="text-center title-desc">NOT YOUR USUAL YOUTUBE NIGHT</p>
          <div className="d-flex justify-content-around mb-3">
            <button className="btn btn-primary">Facebook</button>
            <button className="btn btn-danger">Google</button>
          </div>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Retype Password"
                required
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="termsCheckbox"
                required
              />
              <label className="form-check-label" htmlFor="termsCheckbox">
                I have read and accept the Terms of Service & Privacy Policy
              </label>
            </div>
            <button type="submit" className="btn btn-success w-100 mb-3">
              Register
            </button>
          </form>
          <p className="text-center">
            Already have an account? <a href="#">Try to login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
