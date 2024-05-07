import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faGraduationCap,
  faChalkboardUser,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import abt from "../Assets/about-img.svg";
import pic_2 from "../Assets/pic-2.jpg";
import pic_3 from "../Assets/pic-3.jpg";
import pic_4 from "../Assets/pic-4.jpg";
import pic_5 from "../Assets/pic-5.jpg";
import pic_6 from "../Assets/pic-6.jpg";
import pic_7 from "../Assets/pic-7.jpg";

function About() {
  return (
    <>
      <section className="about">
        <div className="row">
          <div className="image">
            <img src={abt} alt="" />
          </div>

          <div className="content">
            <h3>why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              dolorum quasi illo? Distinctio expedita commodi, nemo a quam error
              repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur
              quaerat tenetur.
            </p>
            <Link to={"/courses"} className="inline-btn">our courses</Link>
          </div>
        </div>

        <div className="box-container">
          <div className="box box-a">
            <FontAwesomeIcon icon={faGraduationCap} className="icon-a"/>
            <div>
              <h3>+10k</h3>
              <p>online courses</p>
            </div>
          </div>

          <div className="box box-a">
            <FontAwesomeIcon icon={faUserGraduate} className="icon-a"/>
            <div>
              <h3>+40k</h3>
              <p>brilliant students</p>
            </div>
          </div>

          <div className="box box-a">
            <FontAwesomeIcon icon={faChalkboardUser} className="icon-a"/>
            <div>
              <h3>+2k</h3>
              <p>expert tutors</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h1 className="heading">student's reviews</h1>

        <div className="box-container-2">
          <div className="teacher-box cr-bx">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src={pic_2} alt="" />
              <div className="star-container">
                <h3>Anushka Mira</h3>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
          </div>

          <div className="teacher-box cr-bx">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src={pic_3} alt="" />
              <div className="star-container">
                <h3>Navdeep Ravinder</h3>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
          </div>

          <div className="teacher-box cr-bx">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src={pic_4} alt="" />
              <div className="star-container">
                <h3>Jordan Christy</h3>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfStroke} />
                </div>
              </div>
            </div>
          </div>

          <div className="teacher-box cr-bx">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src={pic_5} alt="" />
              <div className="star-container">
                <h3>Jyothi Ayesha</h3>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfStroke} />
                </div>
              </div>
            </div>
          </div>

          <div className="teacher-box cr-bx">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src={pic_6} alt="" />
              <div className="star-container">
                <h3>Inderjit Kanti</h3>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfStroke} />
                </div>
              </div>
            </div>
          </div>

          <div className="teacher-box cr-bx">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src={pic_7} alt="" />
              <div className="star-container">
                <h3>Deepti Sharma</h3>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
