import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div>
        <form action="" method="post" className="search-tutor">
            <input type="text" name="search_box" placeholder="Search Tutors..." required maxLength="100"/>
            <button type="submit" className="ser-btn" name="search_tutor"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    </div>
  )
}

export default Search