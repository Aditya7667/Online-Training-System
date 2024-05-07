import React from 'react'
import { Link } from 'react-router-dom'
import wordpress from "../Assets/WordPress-Tutorial.png"
import Android from "../Assets/Android.png"
import Java from "../Assets/java.png"
import Ios from "../Assets/ios.png"
import Cloud from "../Assets/cloud-computing.png"
import Ml from "../Assets/ML-Tutorial.png"
import thumb_9 from "../Assets/thumb-9.png";
import thumb_8 from "../Assets/thumb-8.png";

const Courses = () => {
  return (
    <div>
        <main>
        <div className="course-section">
            <div className="course-box">
                <div className="thumb">
                    <img src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development.jpg"
                        alt="Web Development" className="course-image" />
                    <span>180 videos</span>
                </div>

                <div className="course-title">Web Development</div>
                <div className="course-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, et.
                    Quasi tempore sunt dicta. Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="course-details">Duration: 15 weeks</div>
                <Link to={"/playlist"} className="inline-btn">view playlist</Link>
            </div>

            <div className="course-box">
                <div className="thumb">
                    <img src="https://cdn.analyticsvidhya.com/wp-content/uploads/2023/10/data-science.png"
                        alt="Data Science" className="course-image" />
                    <span>75 videos</span>
                </div>

                <div className="course-title">Data Science</div>
                <div className="course-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
                    eum numquam sunt? Lorem ipsum dolor sit consectetur adipisicing elit.
                </div>
                <div className="course-details">Duration: 10 weeks</div>
                <Link to={"/playlist"} className="inline-btn">view playlist</Link>
            </div>
            <div className="course-box">
                <div className="thumb">
                    <img src="https://visme.co/blog/wp-content/uploads/2021/10/what-is-graphic-design-header-1200.png"
                        alt="Graphic Design" className="course-image" />
                    <span>60 videos</span>
                </div>

                <div className="course-title">Graphic Design</div>
                <div className="course-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                    error aut deserunt doloribus praesentium.
                </div>
                <div className="course-details">Duration: 9 weeks</div>
                <Link to={"/playlist"} className="inline-btn">view playlist</Link>
            </div>

            <div className="course-box">
                <div className="thumb">
                    <img src={thumb_9} alt="Mern Stack" className="course-image" />
                    <span>200 videos</span>
                </div>

                <div className="course-title">MERN Stack Development</div>
                <div className="course-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio
                    nemo expedita. Beatae.
                </div>
                <div className="course-details">Duration: 12 weeks</div>

                <Link to={"/playlist"} className="inline-btn">view playlist</Link>
            </div>

            <div className="course-box">
                <div className="thumb">
                    <img src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg"
                        alt="Data Structure and Algorithm" className="course-image" />
                    <span>150 videos</span>
                </div>

                <div className="course-title">Data Structure And Algorithm</div>
                <div className="course-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                    voluptate fuga dolorem? .
                </div>
                <div className="course-details">Duration: 12 weeks</div>
                <Link to={"/playlist"} className="inline-btn">view playlist</Link>
            </div>

            <div className="course-box">
                <div className="thumb">
                    <img src={thumb_8} alt="MySQL" className="course-image" />
                    <span>50 videos</span>
                </div>

                <div className="course-title">Complete MySQL</div>
                <div className="course-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                    repellendus vero error voluptate!
                </div>
                <div className="course-details">Duration: 4 weeks</div>
                <Link to={"/playlist"} className="inline-btn">view playlist</Link>
            </div>


            <div className="course-box">
                <div className="thumb">
                    <img src={wordpress} alt="WordPress" className="course-image" />
                    <span>40 videos</span>
                </div>

                <div className="course-title">WordPress Tutorial</div>
                <div className="course-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                    repellendus vero error voluptate! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
                <div className="course-details">Duration: 6 weeks</div>
                <Link to={"/playlist"} className="inline-btn">view playlist</Link>
            </div>


            <div className="course-box">
                <div className="thumb">
                    <img src={Ios} alt="Ios Development"
                        className="course-image" />
                    <span>93 videos</span>
                </div>

                <div className="course-title">Ios Development</div>
                <div className="course-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                    repellendus vero error voluptate! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </div>
                <div className="course-details">Duration: 9 weeks</div>
                <Link to={"/playlist"} className="inline-btn">view playlist</Link>
            </div>


            <div className="course-box">
                <div className="thumb">
                    <img src={Java} alt="Java" className="course-image" />
                    <span>55 videos</span>
                </div>

                <div className="course-title">Java Foundation and Advance</div>
                <div className="course-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                    repellendus vero error voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing.
                </div>
                <div className="course-details">Duration: 5 weeks</div>
                <Link to={"/playlist"} className="inline-btn">view playlist</Link>
            </div>


            <div className="course-box">
                <div className="thumb">
                    <img src={Android} alt="Android Development" className="course-image" />
                    <span>63 videos</span>
                </div>

                <div className="course-title">Android Development</div>
                <div className="course-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                    repellendus vero error voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                    ad totam ipsam obcaecati.
                </div>
                <div className="course-details">Duration: 6 weeks</div>
                <Link to={"/playlist"} className="inline-btn">view playlist</Link>
            </div>


            <div className="course-box">
                <div className="thumb">
                    <img src={Ml} alt="Machine Learning" className="course-image" />
                    <span>48 videos</span>
                </div>

                <div className="course-title">Machine Learning</div>
                <div className="course-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                    repellendus vero error voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci! Lorem ipsum dolor sit amet.
                </div>
                <div className="course-details">Duration: 8 weeks</div>
                <Link to={"/playlist"} className="inline-btn">view playlist</Link>
            </div>


            <div className="course-box">
                <div className="thumb">
                    <img src={Cloud} alt="Cloud Computing" className="course-image" />
                    <span>117 videos</span>
                </div>

                <div className="course-title">Cloud Computing</div>
                <div className="course-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                    repellendus vero error voluptate! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corporis, ipsum tempore!
                </div>
                <div className="course-details">Duration: 8 weeks</div>
                <Link to={"/playlist"} className="inline-btn">view playlist</Link>
            </div>
        </div>
    </main>
    </div>
  )
}

export default Courses