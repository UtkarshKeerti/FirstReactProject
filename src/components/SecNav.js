import React from 'react'
import './SecNav.css'
import { Link } from "react-router-dom";

const SecNav = () => {
  return (
    <div className="SecNavCont">
      <div className="SecNav">
        <ul>
          <li>
            <Link to="/">All Posts</Link>
          </li>
          <li>
            <Link to="/article">Article</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
        </ul>
        <div className="btn_grp">
          <button>Write a Post</button>
          <button>Join Group</button>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default SecNav
