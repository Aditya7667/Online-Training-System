import React from "react";
import thumb_9 from "../Assets/thumb-9.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import img_t from "../Assets/images (2).png";
import { Link } from "react-router-dom";

const Playlist = () => {
  return (
    <div>
      <section className="playlist-details">
        <div className="row">
          <div className="column">
            <div className="save-playlist">
              <button type="button">
                <FontAwesomeIcon icon={faBookmark} className="icon-p" />{" "}
                <span>save playlist</span>
              </button>
            </div>

            <div className="thumb">
              <img src={thumb_9} alt="" />
              <span>200 videos</span>
            </div>
          </div>
          <div className="column">
            <div className="tutor">
              <img src={img_t} alt="" />
              <div>
                <h3>Mitchell Marsh</h3>
                <span>21-12-2023</span>
              </div>
            </div>

            <div className="details">
              <h3>MERN Stack Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                minus reiciendis, error sunt veritatis exercitationem deserunt
                velit doloribus itaque voluptate. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Veritatis corporis facilis beatae
                molestias doloremque dolorem, illo consequatur repellendus
                similique quisquam tenetur debitis, nisi est maiores rem soluta
                officia quam. Ad, voluptas voluptates?
              </p>
              <Link to={"/teacherprofile"} className="inline-btn"> 
                view profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="playlist-container">
        <div className="lecture-box">
          <img className="playlist-img" src={thumb_9} alt="Lecture" />
          <div className="playlist-title">Lecture 1: Course Overview</div>
          <div className="playlist-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, et.
            Quasi tempore sunt dicta.
          </div>
          <Link to={"/video"} className="inline-btn-2"> {/* isko change krna h */}
            Play
          </Link>
        </div>

        <div className="lecture-box">
          <img className="playlist-img" src={thumb_9} alt="Lecture" />
          <div className="playlist-title">Lecture 2: Introduction to MERN</div>
          <div className="playlist-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, et.
            Quasi tempore sunt dicta.
          </div>
          <Link to={"/video"} className="inline-btn-2"> {/* isko change krna h */}
            Play
          </Link>
        </div>

        <div className="lecture-box">
          <img className="playlist-img" src={thumb_9} alt="Lecture" />
          <div className="playlist-title">Lecture 3: Basics of MERN</div>
          <div className="playlist-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, et.
            Quasi tempore sunt dicta.
          </div>
          <Link to={"/video"} className="inline-btn-2"> {/* isko change krna h */}
            Play
          </Link>
        </div>

        <div className="lecture-box">
          <img className="playlist-img" src={thumb_9} alt="Lecture" />
          <div className="playlist-title">Lecture 4: Introduction to React</div>
          <div className="playlist-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, et.
            Quasi tempore sunt dicta.
          </div>
          <Link to={"/video"} className="inline-btn-2"> {/* isko change krna h */}
            Play
          </Link>
        </div>

        <div className="lecture-box">
          <img className="playlist-img" src={thumb_9} alt="Lecture" />
          <div className="playlist-title">
            Lecture 5: Building the Frontend{" "}
          </div>
          <div className="playlist-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, et.
            Quasi tempore sunt dicta.
          </div>
          <Link to={"/video"} className="inline-btn-2"> {/* isko change krna h */}
            Play
          </Link>
        </div>

        <div className="lecture-box">
          <img className="playlist-img" src={thumb_9} alt="Lecture" />
          <div className="playlist-title">Lecture 6: Introduction to Redux</div>
          <div className="playlist-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, et.
            Quasi tempore sunt dicta.
          </div>
          <Link to={"/video"} className="inline-btn-2"> {/* isko change krna h */}
            Play
          </Link>
        </div>
      </div>

      <div className="more-btn">
        <Link to="" className="inline-option-btn"> 
          view all Lecture
        </Link>
      </div>
    </div>
  );
};

export default Playlist;
