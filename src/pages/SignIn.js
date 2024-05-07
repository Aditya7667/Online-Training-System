import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleGoogleLogin = () => {
    console.log("Logging in with Google...");
  };

  const handleFacebookLogin = () => {
    console.log("Logging in with Facebook...");
  };

  return (
    <div>
      <div className="sign">
        <div className="card">
          <h2>Sign In</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">
                Email:<span>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="abc@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">
                Password:<span>*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <Link to="" className="forgot-password">
                Forgot password?
              </Link>
            </div>

            <button type="button" className="button">
              Sign In
            </button>
          </form>

          <div className="social-login">
            <button className="google" onClick={handleGoogleLogin}>
              <FontAwesomeIcon icon={faGoogle} className="icon" />Login with
              Google
            </button>

            <button className="facebook" onClick={handleFacebookLogin}>
              Login with Facebook{" "}
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </button>
          </div>

          <div className="input-group">
            <p>
              Don't have an account?{" "}
              <Link to={"/register"} className="reg">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
