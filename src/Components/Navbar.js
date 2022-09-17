import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav>
        
        <ul>
          <Link to="/">
            <li id='navBrand'>Formulatytics</li>
          </Link>
          <Link to="/">
            <li className='right-nav' id='navSchedule'>Schedule</li>
          </Link>
          <Link to="/results">
            <li className='right-nav' id='navResults'>Results</li>
          </Link>
        </ul>
    </nav>
  )
}

export default Navbar
