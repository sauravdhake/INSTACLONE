import React from 'react'
import { Link } from 'react-router-dom';
import "../CSS/header.css";

export default function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <img id="logo" src='/logo.png' alt="logo Img"/>
        </div>
        <div className='camera logo'>
          <Link to="/Addpost">
            <img id='camera-logo' src='/camera.png' alt="camera logo Img"/>
          </Link>
        </div>
    </div>
  )
}
