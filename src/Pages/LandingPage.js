import React from 'react';
import Schedule from '../Components/Schedule';
import ScrollStandings from '../Components/ScrollStandings';
import '../Components/Schedule.css'
import '../Components/ScrollStandings.css'
function LandingPage() {
  return (
    <>
    <div className='container'>
    <Schedule/>
    </div>
    </>
  )
}

export default LandingPage