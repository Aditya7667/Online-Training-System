import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: null
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({
        ...formData,
        profilePic: e.target.files[0]
      });
    } else {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    e.target.reset();

    setFormData({
      Name: "",
      Email: "",
      "Ph. Number": "",
      Message: "",
    });
  };

  return (
    <div>
      <div className="sign">
        <div className="card">
          <h2>Register Now</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">
                Full Name:<span>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">
                Email:<span>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="abc@example.com"
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
              <label htmlFor="confirm-password">
                Confirm Password:<span>*</span>
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                required
                placeholder="confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="profile-pic">
                Select Profile:<span>*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                id="profile-pic"
                name="profilePic"
                required
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="button">
              Register
            </button>
          </form>

          <div className="input-group">
            <p>
              Already have an account?{" "}
              <Link to={"/signin"} className="reg">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
