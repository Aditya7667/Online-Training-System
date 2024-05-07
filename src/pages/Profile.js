import React from "react";
import thumb_9 from "../Assets/thumb-9.png";
import thumb_8 from "../Assets/thumb-8.png";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="box-2">
        <img
          className="profile-photo"
          src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
          alt="Profile Photo"
        />

        <Link to={"/updateprofile"} className="inline-btn">
          Update Profile
        </Link>
      </div>

      <div className="profile-container-2">
        <div className="box-3">
          <div className="user-info">
            <h2>John Alex</h2>
            <p className="para">
              User Description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Repellat quia inventore, molestiae aperiam
              expedita incidunt fugiat, nam cupiditate eos sapiente autem
              provident nemo nisi, rerum culpa aliquid!. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Atque aliquid ducimus vero!
              Dolorum distinctio dolores nobis quos, debitis sunt consequatur
              quaerat quidem. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cupiditate hic dicta molestiae inventore maiores! Possimus
              ducimus quisquam corrupti voluptate cumque.
            </p>
          </div>
        </div>
      </div>

      <div className="profile-container">
        <div className="box">
          <div className="course-details detail">
            <h3>Subscribe Course Material</h3>
            <ul className="material-list">
              <li>
                <img
                  className="course-image profile-img"
                  src={thumb_9}
                  alt="Course 1"
                />
                <div className="course-details detail">
                  <h3>MySQL</h3>
                  <p className="para-content">
                    Course Description Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Vitae animi sit alias labore,
                    dolor illum beatae rem deserunt corrupti, nemo earum,
                    assumenda iusto. Quae.
                  </p>
                  <p>
                    <strong>Instructor:</strong> Alex Carey
                  </p>
                  <p>
                    <strong>Duration:</strong> 4 weeks
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="box">
          <div className="assessment-details detail">
            <h3>Assessments</h3>
            <ul className="assessments-list">
              <li>
                <img
                  className="assessment-image profile-img"
                  src={thumb_8}
                  alt="Assessment 1"
                />
                <div className="assessment-details detail">
                  <h3>MERN Stack Development</h3>
                  <p className="para-content">
                    Assessment Description Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Voluptates
                    corporis maiores sapiente nam omnis. Labore possimus
                    quisquam dolorum consequatur nihil vitae provident quam
                    laborum.
                  </p>
                  <p>
                    <strong>Due Date:</strong> January 15, 2024
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="box">
          <div className="report-details detail">
            <h3>Test Reports</h3>
            <ul className="reports-list">
              <li>
                <img
                  className="report-image profile-img"
                  src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development.jpg"
                  alt="Test Report 1"
                />
                <div className="report-details detail">
                  <h3>Web Development</h3>
                  <p className="para-content">
                    Test Report Description Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Id officia vero
                    aut corporis iure sapiente iusto perspiciatis tempora, autem
                    voluptas debitis totam quis. Totam.
                  </p>
                  <p>
                    <strong>Date:</strong> December 28, 2023
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
