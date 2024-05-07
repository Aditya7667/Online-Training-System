import React from "react";
import Vid from "../Assets/vid-1.mp4";
import thumb_9 from "../Assets/thumb-9.png";
import { Link } from "react-router-dom";
import Avatar from "../Assets/images (2).png";
import Pic from "../Assets/pic-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faComment,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

const Video = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [Likes, setLikes] = useState(0);
  const [DisLikes, setDisLikes] = useState(0);
  const [currentTimestamp, setCurrentTimestamp] = useState("");
  const [commentCount, setCommentCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    setCurrentTimestamp(getCurrentTimestamp());
  }, []);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleLike = () => {
    setLikes(Likes + 1);
  };

  const handleDisLike= () => {
    setDisLikes(DisLikes + 1);
  };

  const getCurrentTimestamp = () => {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim() !== "") {
      const commenterName = "John Alex"; // Isko backend se change kr lena
      const avatarUrl = Pic; // Isko backend se change kr lena
      const timestamp = getCurrentTimestamp();

      const newComments = [
        ...comments,
        {
          commenterName,
          avatarUrl,
          timestamp,
          text: newComment.trim(),
        },
      ];

      setComments(newComments);
      setNewComment("");
      setCommentCount(commentCount + 1);
    }
  };

  return (
    <div>
      <div className="video-container">
        <video controls poster={thumb_9}>
          <source src={Vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2 className="title">Lecture 2: Introduction to MERN</h2>

        <div className="engagement-section">
          <div className="info">
            <p className="date">
              <FontAwesomeIcon icon={faCalendar} className="icon-date" />

              <span id="dat">{currentTimestamp}</span>
            </p>
          </div>

          <div className="buttons">
            <button id="like-btn" onClick={handleLike}>
              <FontAwesomeIcon icon={faThumbsUp} className="" />{" "}
              <span id="like-count"> {Likes} </span>
            </button>

            <button id="like-btn" onClick={handleDisLike}>
              <FontAwesomeIcon icon={faThumbsDown} className="" />{" "}
              <span id="like-count"> {DisLikes} </span>
            </button>

            <button id="comment-btn">
              <FontAwesomeIcon icon={faComment} className="" />{" "}
              <span id="comment-count"> {commentCount} </span>
            </button>
          </div>
        </div>
        <div className="border-bottom"></div>

        <div className="tutor">
          <img src={Avatar} alt="" />
          <div className="tutor-details">
            <Link to={"/teacherprofile"}>
              <h3>Mitchell Marsh</h3>
            </Link>
            <span>Software developer</span>
          </div>
        </div>

        <div className="play-desc">
          <Link to={"/playlist"} className="inline-btn btnn">
            view playlist
          </Link>
          <button onClick={toggleDescription} className="inline-btn bt">
            {showDescription ? "Hide description" : "Show description"}
          </button>
        </div>

        <div className={`description-box ${showDescription ? "expanded" : ""}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
          blanditiis, nemo explicabo consectetur tenetur quos officia facere,
          quis dolor dignissimos illum tempore iste? Consectetur tenetur, odio
          incidunt officiis recusandae labore magni! Vero quisquam quod atque,
          itaque minima similique, deserunt delectus ipsa ab adipisci
          repudiandae perferendis. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Laborum tenetur similique officiis quibusdam eius
          consectetur laudantium sequi animi, ratione officia quis ipsum dicta
          distinctio velit nihil. Consectetur ullam cumque ipsam impedit
          accusamus.
        </div>
      </div>

      <div className="comment-section">
        <h2>Comments</h2>
        <div id="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="comment-details">
                <img src={comment.avatarUrl} alt="Avatar" />
                <span>{comment.commenterName}</span>
                <span className="timestamp">{comment.timestamp}</span>
              </div>
              <div className="comment-text">{comment.text}</div>
            </div>
          ))}
        </div>
        <div className="comment-form">
          <input
            type="text"
            id="comment-input"
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleCommentChange}
          />
          <button id="post-comment-btn" onClick={handlePostComment}>
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;