import React from "react";
import {Link} from "react-router-dom";
import pic_2 from "../Assets/pic-2.jpg";
import pic_1 from "../Assets/pic-1.jpg";
import pic_4 from "../Assets/pic-4.jpg";
import pic_5 from "../Assets/pic-5.jpg";
import pic_6 from "../Assets/pic-6.jpg";
import pic_7 from "../Assets/pic-7.jpg";
import pic_9 from "../Assets/pic-9.jpg";
import img_t from "../Assets/images (2).png";
import Search from "../component/Search Bar/Search";

const Teachers = () => {
  return (
    <div>
      <section className="contact teachers">
        <div className="head-box">
          <h1 className="heading">Expert Teachers</h1>
        </div>

        <Search />

        <div className="box-container">
          <div className="teacher-box get-started">
            <h2>Become a Tutor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              saepe fuga architecto dicta ad impedit, quidem nobis possimus,
              quam asperiores quos a. Dicta a rerum velit fugit ducimus sint
              deserunt perspiciatis quam eligendi ut. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <Link to={"/register"} className="inline-btn">
              Get Started
            </Link>
          </div>

          <div className="teacher-box">
            <img src={pic_1} alt="tutor" />
            <h3>Neil Todd</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aspernatur.
            </p>
            <div className="details">
              <div className="details-div">
                Total Playlist:- <span>4</span>
              </div>
              <div className="details-div">
                Total Videos:- <span>140</span>
              </div>
              <div className="details-div">
                Total Likes:- <span>20k</span>
              </div>
            </div>
            <Link to={"/teacherprofile"} className="inline-btn">
              view profile
            </Link>
          </div>

          <div className="teacher-box">
            <img src={pic_5} alt="tutor" />
            <h3>Shelia Vera</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aspernatur.
            </p>
            <div className="details">
              <div className="details-div">
                Total Playlist:- <span>2</span>
              </div>
              <div className="details-div">
                Total Videos:- <span>100</span>
              </div>
              <div className="details-div">
                Total Likes:- <span>14.5k</span>
              </div>
            </div>
            <Link to={"/teacherprofile"} className="inline-btn">
              view profile
            </Link>
          </div>

          <div className="teacher-box">
            <img src={pic_2} alt="tutor" />
            <h3>Yasmin Alvina</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aspernatur.
            </p>
            <div className="details">
              <div className="details-div">
                Total Playlist:- <span>8</span>
              </div>
              <div className="details-div">
                Total Videos:- <span>150</span>
              </div>
              <div className="details-div">
                Total Likes:- <span>21.1k</span>
              </div>
            </div>
            <Link to={"/teacherprofile"} className="inline-btn">
              view profile
            </Link>
          </div>

          <div className="teacher-box">
            <img src={img_t} className="t-teacher" alt="tutor" />
            <h3>Mitchell Marsh</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aspernatur.
            </p>
            <div className="details">
              <div className="details-div">
                Total Playlist:- <span>5</span>
              </div>
              <div className="details-div">
                Total Videos:- <span>150</span>
              </div>
              <div className="details-div">
                Total Likes:- <span>18.3k</span>
              </div>
            </div>
            <Link to={"/teacherprofile"} className="inline-btn">
              view profile
            </Link>
          </div>

          <div className="teacher-box">
            <img src={pic_4} alt="tutor" />
            <h3>Lorne Carl</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aspernatur.
            </p>
            <div className="details">
              <div className="details-div">
                Total Playlist:- <span>3</span>
              </div>
              <div className="details-div">
                Total Videos:- <span>80</span>
              </div>
              <div className="details-div">
                Total Likes:- <span>5.9k</span>
              </div>
            </div>
            <Link to={"/teacherprofile"} className="inline-btn">
              view profile
            </Link>
          </div>

          <div className="teacher-box">
            <img src={pic_6} alt="tutor" />
            <h3>Navneet Mitra</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aspernatur.
            </p>
            <div className="details">
              <div className="details-div">
                Total Playlist:- <span>4</span>
              </div>
              <div className="details-div">
                Total Videos:- <span>147</span>
              </div>
              <div className="details-div">
                Total Likes:- <span>25.6k</span>
              </div>
            </div>
            <Link to={"/teacherprofile"} className="inline-btn">
              view profile
            </Link>
          </div>

          <div className="teacher-box">
            <img src={pic_7} alt="tutor" />
            <h3>Ellyse Perry</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aspernatur.
            </p>
            <div className="details">
              <div className="details-div">
                Total Playlist:- <span>7</span>
              </div>
              <div className="details-div">
                Total Videos:- <span>258</span>
              </div>
              <div className="details-div">
                Total Likes:- <span>63.8k</span>
              </div>
            </div>
            <Link to={"/teacherprofile"} className="inline-btn">
              view profile
            </Link>
          </div>

          <div className="teacher-box">
            <img src={pic_9} alt="tutor" />
            <h3>Ravinder Mandeep</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aspernatur.
            </p>
            <div className="details">
              <div className="details-div">
                Total Playlist:- <span>9</span>
              </div>
              <div className="details-div">
                Total Videos:- <span>170</span>
              </div>
              <div className="details-div">
                Total Likes:- <span>35k</span>
              </div>
            </div>
            <Link to={"/teacherprofile"} className="inline-btn">
              view profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
