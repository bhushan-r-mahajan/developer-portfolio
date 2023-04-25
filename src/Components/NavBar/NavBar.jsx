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
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Expirence</li>
            <li>Portfolio</li>
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