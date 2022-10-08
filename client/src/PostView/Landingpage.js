import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/landing_page.css";

export default function Landing_page() {
  return (
    <div className='wrapper'>
        <img id='landing-page' src='/landing-page.jpg' alt='landing Page'/>
        <div className='heading-and-button-container'>
            <h1 className='heading'>10x Team 04</h1>
            <Link id='enter-button' to="/postview">Enter</Link>
        </div>
    </div>
  )
}
