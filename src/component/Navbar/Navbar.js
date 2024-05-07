import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser , faBars , faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to='/' className="logo">Logo</Link>
        
        <div className="search-bar">
          <form action="search.html" method="post" className="search-form">
            <input type="text" name="search_box" required placeholder="search courses..." id="search-main-bar" maxLength="100" />
            <button type="submit" className=""><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </form>
        </div>
        <div className="dropdown">
          <button className="dropbtn"><FontAwesomeIcon icon={faBars} /></button>
          <div className="dropdown-content">

          <Link to='/contact' className="">Contact Us</Link>
          <Link to='/about' className="">About</Link>
          <Link to='/teachers' className="">Teachers</Link>


          </div>
        </div>
        <div>

        <Link to='/profile' className="btn"><FontAwesomeIcon icon={faUser} /></Link>
        <Link to='/signin' className="btn">Sign In</Link>
        <Link to='/register' className="btn">Sign Up</Link>

        </div>
      </nav>
    );
  }
}

export default Navbar;
