import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <div className="category-panel">
        <ul className="course-list">
          <li className="category-title">
            <Link to={""} className="course-link-category">
              Top Categories
            </Link>
          </li>
          <li className="course-item">
            <Link to={""} className="course-link">
              Web Development
            </Link>
          </li>
          <li className="course-item">
            <Link to={""} className="course-link">
              Data Science
            </Link>
          </li>
          <li className="course-item">
            <Link to={""} className="course-link">
              Graphic Design
            </Link>
          </li>
          <li className="course-item">
            <Link to={""} className="course-link">
              Mobile App Development
            </Link>
          </li>
          <li className="course-item">
            <Link to={""} className="course-link">
              Digital Marketing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
