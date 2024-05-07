import React, { useState } from "react";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
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

  };

  return (
    <div>
      <div className="sign">
        <div className="card">
          <h2>Update Profile</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">
                Update Full Name:<span>*</span>
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
                Update Email:<span>*</span>
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
              <label htmlFor="old-password">
                Previous Password:<span>*</span>
              </label>
              <input
                type="password"
                id="old-password"
                name="oldPassword"
                required
                placeholder="old password"
                value={formData.oldPassword}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="new-password">
                New Password:<span>*</span>
              </label>
              <input
                type="password"
                id="new-password"
                name="newPassword"
                required
                placeholder="new password"
                value={formData.newPassword}
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
                Update Profile:<span>*</span>
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

            <button type="submit" className="button but">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
