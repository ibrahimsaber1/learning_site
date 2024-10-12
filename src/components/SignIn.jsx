import React from 'react';
import '../styles/style.css';

const SignIn = () => {
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
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>
              <a href="#" className="text-light">Forgot your password?</a>
            </div>
            <button type="submit" className="btn btn-success w-100 mb-3">
              Log In
            </button>
          </form>
          <p className="text-center">
            Don’t have an account yet? <a href="#">Create an account now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
