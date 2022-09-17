import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
function ScrollStandings() {

// get driver standings from f1 api and put in useEffect
    const [driverStandingAPI, setDriverStandingAPI] = useState([])
    const getDriverData = () => {
    let config = {
        method: 'get',
        url: 'http://ergast.com/api/f1/current/driverStandings.json',
        headers: { }
    };
    
  axios(config)
  .then(function (response) {
    setDriverStandingAPI(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
  })
  .catch(function (error) {
    console.log(error);
  });}

  //get Constructors standings from f1 api
  const [constructorStandingAPI, setConstructorStandingAPI] = useState([])
  const getConstructorData = () => {
    let config = {
        method: 'get',
        url: 'http://ergast.com/api/f1/current/constructorStandings.json',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        setConstructorStandingAPI(response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings) 
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    //make api call on first render
    useEffect(() => {
        getDriverData() 
        getConstructorData()
    },[])

   

    //switch between Drivers standing and constructor standings
    const [standing, setStanding] = useState(
        useEffect(() => {
            setStanding(
                <table className='driver-standing'>
                    <thead>
                        <tr>
                            <th>POS</th>
                            <th>DRIVER</th>
                            <th>TEAM</th>
                            <th>PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                    {driverStandingAPI.map((data) => {
                        return (
                                <React.Fragment key={data.position}>
                                    <tr>
                                        <td>{data.position + "."}</td>
                                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                                        <td>{data.Constructors[0].name}</td>
                                        <td>{data.points}</td>
                                    </tr>
                                </React.Fragment>
                        )
                    })}
                    </tbody>
                </table>
                    )    
                    //re render this useState when driverStandingAPI changes
                },[driverStandingAPI])
            )
    const constructorBtn = () => {
        setStanding(
            <>
        <table className='constructor-standing'>
            <thead>
                <tr>
                    <th>POS</th>
                    <th>TEAM</th>
                    <th>COUNTRY</th>
                    <th>PTS</th>
                </tr>
            </thead>
            <tbody>
            {constructorStandingAPI.map((data) => {
                return (
                    <React.Fragment key={data.position}>
                        <tr>
                             <td>{data.position + "."}</td>
                             <td>{data.Constructor.name}</td>
                             <td>{data.Constructor.nationality}</td>
                             <td>{data.points}</td>
                        </tr>
                    </React.Fragment>
                )
            })}
            </tbody> 
        </table>       
            </>
            )
        
    }
    const driverStandingBtn = () => {
        setStanding(
        <table className='driver-standing'>
            <thead>
                <tr>
                    <th>POS</th>
                    <th>DRIVER</th>
                    <th>TEAM</th>
                    <th>PTS</th>
                </tr>
            </thead>
            <tbody>
            {driverStandingAPI.map((data) => {
                return (
                        <React.Fragment key={data.position}>
                            <tr>
                                <td>{data.position + "."}</td>
                                <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                                <td>{data.Constructors[0].name}</td>
                                <td>{data.points}</td>
                            </tr>
                        </React.Fragment>
                )
            })}
            </tbody>
        </table>
    )
    }

  return (
      <>
    <div className='standingsContainer'>
        <div className='standings'>
        <div className='standingsHeader'>
            <button id='driverBtn' onClick={ () =>driverStandingBtn()}>Drivers</button>
            <button id='constructorBtn' onClick={ () => constructorBtn()}>Constructors</button>
        </div>
            {standing}
        </div>
    </div>
      </>
  )
}

export default ScrollStandings