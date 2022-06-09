import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav>
        <h1>Formulalytics</h1>
        <ul>
          <Link to="/results">
            <li id='rightNav'>Results</li>
          </Link>
          <Link to="/">
            <li>Schedule</li>
          </Link>
        </ul>
    </nav>
  )
}

export default Navbar
