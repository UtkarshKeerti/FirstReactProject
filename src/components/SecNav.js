import React from 'react'
import './SecNav.css'


const SecNav = () => {
  return (
    <div className="SecNavCont">
      <div className="SecNav">
        <ul>
          <li>All Posts(32)</li>
          <li>Article</li>
          <li>Event</li>
          <li>Education</li>
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
