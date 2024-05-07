import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./component/Footer/Footer";
import Teacher from "./pages/Teachers"
import TeacherProfile from "./pages/TeacherProfile";
import Playlist from "./pages/Playlist";
import Register from "./pages/Register";
import Video from "./pages/Video"
import SignIn from "./pages/SignIn"
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile"
import Courses from "./pages/Courses";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/about" element= {<About/>}/>
          <Route path="/contact" element= {<Contact/>}/>
          <Route path="/teachers" element= {<Teacher/>}/>
          <Route path="/teacherprofile" element= {<TeacherProfile/>}/>
          <Route path="/playlist" element= {<Playlist/>}/>
          <Route path="/register" element= {<Register/>}/>
          <Route path="/signin" element= {<SignIn/>}/>
          <Route path="/video" element= {<Video/>}/>
          <Route path="/profile" element= {<Profile/>}/>
          <Route path="/updateprofile" element= {<UpdateProfile/>}/>
          <Route path="/courses" element= {<Courses/>}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
