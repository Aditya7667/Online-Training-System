import React from "react";
import { Link } from "react-router-dom";
import img_t from "../Assets/images (2).png";
import thumb_9 from "../Assets/thumb-9.png";
import thumb_8 from "../Assets/thumb-8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment , faThumbsUp } from "@fortawesome/free-solid-svg-icons";


const TeacherProfile = () => {
  return (
    <div>
      <div className="t-container">
        <div className="t-profile">
          <img src={img_t} alt="Teacher's Profile Picture" />
          <h2>Mitchell Marsh</h2>
          <p>Software Developer</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            ante urna. Mauris ac dui dictum, blandit libero sed, vehicula
            lectus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quia eum excepturi reiciendis, quasi quos nostrum dolorem. Nobis,
            doloribus qui cum ex dolores cumque.
          </p>
        </div>
      </div>

      <main>
        <div className="course-section">
          <div className="course-box">
            <div className="thumb">
              <img
                src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development.jpg"
                alt="Web Development"
                className="course-image"
              />
              <span>180 videos</span>
            </div>

            <div className="course-title">Web Development</div>
            <div className="course-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
              et. Quasi tempore sunt dicta.
            </div>
            <div className="course-details">Duration: 15 weeks</div>
            <div className="stats">
              <div>
              <FontAwesomeIcon icon={faThumbsUp} className="icon-teacher"/> 12k Likes
              </div>
              <div>
              <FontAwesomeIcon icon={faComment} className="icon-teacher"/> 8.9k Comments
              </div>
            </div>
            <Link to={"/playlist"} className="inline-btn">
              view playlist
            </Link>
          </div>

          <div className="course-box">
            <div className="thumb">
              <img
                src="https://cdn.analyticsvidhya.com/wp-content/uploads/2023/10/data-science.png"
                alt="Data Science"
                className="course-image"
              />
              <span>75 videos</span>
            </div>

            <div className="course-title">Data Science</div>
            <div className="course-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              eum numquam sunt?
            </div>
            <div className="course-details">Duration: 10 weeks</div>
            <div className="stats">
              <div>
                <FontAwesomeIcon icon={faThumbsUp} /> 14k Likes
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} /> 5k Comments
              </div>
            </div>
            <Link to={"/playlist"} className="inline-btn">
              view playlist
            </Link>
          </div>

          <div className="course-box">
            <div className="thumb">
              <img
                src={thumb_9}
                alt="Mern Stack"
                className="course-image"
              />
              <span>200 videos</span>
            </div>

            <div className="course-title">MERN Stack Development</div> 
            <div className="course-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio
              nemo expedita. Beatae.
            </div>
            <div className="course-details">Duration: 12 weeks</div>
            <div className="stats">
              <div>
                <FontAwesomeIcon icon={faThumbsUp} /> 9k Likes
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} /> 6.7k Comments
              </div>
            </div>

            <Link to={"/playlist"} className="inline-btn">
              view playlist
            </Link>
          </div>

          <div className="course-box">
            <div className="thumb">
              <img
                src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg"
                alt="Data Structure and Algorithm"
                className="course-image"
              />
              <span>150 videos</span>
            </div>

            <div className="course-title">Data Structure And Algorithm</div>
            <div className="course-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              voluptate fuga dolorem? .
            </div>
            <div className="course-details">Duration: 12 weeks</div>
            <div className="stats">
              <div>
                <FontAwesomeIcon icon={faThumbsUp} /> 19k Likes
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} /> 15k Comments
              </div>
            </div>
            <Link to={"/playlist"} className="inline-btn">
              view playlist
            </Link>
          </div>

          <div className="course-box">
            <div className="thumb">
              <img src={thumb_8} alt="MySQL" className="course-image" />  {/*yaha dikkat*/}
              <span>50 videos</span>
            </div>

            <div className="course-title">Complete MySQL</div>
            <div className="course-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              repellendus vero error voluptate!
            </div>
            <div className="course-details">Duration: 4 weeks</div>
            <div className="stats">
              <div>
                <FontAwesomeIcon icon={faThumbsUp} /> 4k Likes
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} /> 1k Comments
              </div>
            </div>
            <Link to={"/playlist"} className="inline-btn">
              view playlist
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherProfile;
