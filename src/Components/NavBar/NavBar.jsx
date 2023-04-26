import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Bhushan</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: 'none',}}>
            <li>Home</li>
            <li>About Me</li>
            <li>Expirence</li>
            <li>Projects</li>
          </ul>
        </div>
        <button className="button">
          Contact
        </button>
      </div>
    </div>
  )
}

export default NavBar