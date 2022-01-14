import React from 'react'
import './Header.css'
import myImg from '../assets/whole.png'
import { Form, FormControl } from 'react-bootstrap'

const header = () => {
  return (
    <div className="top_head">
      <div className="head-cont">
        <div className="navbar_brand"><img src={myImg} alt="" /></div>
        <div className="searchbar"><Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search for your favorite groups in ATG"
            className="me-2"
            aria-label="Search"
          />
        </Form></div>
        <div className="navbar_right"><p>Create account. <a id="head_a" href="#">It’s free!</a></p></div>
      </div>
    </div>
  )
}

export default header
