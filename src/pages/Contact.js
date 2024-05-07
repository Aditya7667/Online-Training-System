import React, { useState, useEffect } from "react";
import contact_img from "../Assets/contact-img.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    "Ph. Number": "",
    Message: "",
  });

  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxP8RfLjWh6rpseFNrN0Ql0HtBqKiZ8_gP2MYo7AYhc0w55QuAruPHjZ3prfMKueJ6p/exec";
    const form = document.forms["submit-to-google-sheet"];

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxP8RfLjWh6rpseFNrN0Ql0HtBqKiZ8_gP2MYo7AYhc0w55QuAruPHjZ3prfMKueJ6p/exec";

    fetch(scriptURL, { method: "POST", body: new FormData(e.target) })
      .then((response) => {
        if (response.ok) {
          alert("Message Sent Successfully");
          e.target.reset();

          setFormData({
            Name: "",
            Email: "",
            "Ph. Number": "",
            Message: "",
          });
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => console.error("Error!", error.message));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <section className="contact">
        <div className="row">
          <div className="image">
            <img src={contact_img} alt="" />
          </div>

          <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
            <h3>get in touch</h3>
            <input
              type="text"
              placeholder="Enter your Name"
              name="Name"
              required
              maxLength="50"
              className="box"
              value={formData.Name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Enter your Email"
              name="Email"
              required
              maxLength="50"
              className="box"
              value={formData.Email}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Enter your Number"
              name="Ph. Number"
              required
              maxLength="50"
              className="box"
              value={formData["Ph. Number"]}
              onChange={handleChange}
            />
            <textarea
              name="Message"
              className="box"
              placeholder="Enter your Message"
              required
              maxLength="1000"
              cols="30"
              rows="10"
              value={formData.Message}
              onChange={handleChange}
            ></textarea>
            <input
              type="submit"
              value="send message"
              className="inline-btn"
              name="submit"
            />
          </form>
        </div>

        <div className="box-container">
          <div className="box bx">
            <FontAwesomeIcon icon={faPhone} className="icon-contact" />
            <h3>Phone Number</h3>
            <a href="tel:1234567890">123-456-7890</a>
            <a href="tel:1112223333">111-222-3333</a>
          </div>

          <div className="box bx">
            <FontAwesomeIcon icon={faEnvelope} className="icon-contact" />
            <h3>Email Address</h3>
            <a href="mailto:abcd@gmail.com">abcd@gmail.com</a>
            <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
          </div>

          <div className="box bx">
            <FontAwesomeIcon icon={faLocationDot} className="icon-contact" />
            <h3>Office Address</h3>
            <a href="#">Flat no. 117, A-1 building, Abcd, India - 123456</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
