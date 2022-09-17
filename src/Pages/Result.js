import React from 'react';
import ScrollStandings from '../Components/ScrollStandings';
import ResultsTable from '../Components/ResultsTable';

import '../Components/Result.css'

function Result() {
  return (
    <>
      <div className='result-container'>
        <div className='race-results '>
          <ResultsTable/>  
        </div>  
        <div className='scroll-standings '>
          <ScrollStandings/>
        </div>
      </div>
    </>
  )
}

export default Result