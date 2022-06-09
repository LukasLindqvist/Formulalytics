import React from 'react'
import axios from 'axios'
import { useEffect , useState } from 'react'
import Cover from '../Images/Bahrain_Cover.png'
import Country from '../Images/Bahrain_Flag.png'
import Trackmap from '../Images/Bahrain_TrackMap.png'
function Schedule() {

    
    //get data from formula1 api
    const [data,setData] = useState([])

    let config = {
        method: 'get',
        url: 'http://ergast.com/api/f1/current.json',
        headers: { }
      };
    
    useEffect(() => {
        axios(config)
        .then(res => {
            setData(res.data.MRData.RaceTable.Races)   
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    

    let raceSchedule = 
    //remove race weekends with sprint races as these dont have a practice 3
    data.filter(function( data ) {
        if (data.ThirdPractice === undefined) {  
            return false 
        }
            return true

    })
    .map((data) => {      
        return(
            <React.Fragment key ={data.round}>
            <div className='contentContainer'>
            <div className='scheduleContainer'>
                <div className='scheduleRace'  style={{backgroundImage: `url(${Cover})`}} >
                    <img src={Country} alt='country flag' id='flagImg'></img>
                    <img src={Trackmap} alt='Trackmap' id='trackMapImg'></img>
                    <div className='sessionInfo'>
                        <div className='sessionText'>
                            <h3>PRACTICE 1</h3>
                            <h4>FRI</h4>
                            <h5>{data.FirstPractice.time.slice(0,5)}</h5>
                        </div>
                        <div className='sessionText'>
                            <h3>PRACTICE 2</h3>
                            <h4>FRI</h4>
                            <h5>{data.SecondPractice.time.slice(0,5)}</h5>
                        </div>
                            <div className='line'></div>
                                <div className='sessionText'>
                                    <h3>PRACTICE 3</h3>
                                    <h4>SAT</h4>
                                    <h5>{data.ThirdPractice.time.slice(0,5)}</h5>
                                </div>
                                <div className='sessionText'>
                                    <h3>QUALYFYING</h3>
                                    <h4>SAT</h4>
                                    <h5>{data.Qualifying.time.slice(0,5)}</h5>
                                </div>
                            <div className='line'></div>
                                <div className='sessionText'>
                                    <h3>RACE</h3>
                                    <h4>SUN</h4>
                                    <h5>{data.time.slice(0,5)}</h5>
                                </div>
                                <div className='sessionText'>
                                    <p>Session start time based on GMT + 0</p>
                                </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
        )
    })
    

    let sprintRaceOutput =
     //remove race weekends without sprint race as these do have a third practice session
    data.filter(function( data ) {
        if (data.ThirdPractice !== undefined) {  
            return false 
        }
            return true

    })
    .map((data) => {      
        return(
            <React.Fragment key ={data.round}>
            <div className='contentContainer'>
            <div className='scheduleContainer'>
                <div className='scheduleRace'  style={{backgroundImage: `url(${Cover})`}} >
                    <img src={Country} alt='country flag' id='flagImg'></img>
                    <img src={Trackmap} alt='Trackmap' id='trackMapImg'></img>
                    <div className='sessionInfo'>
                        <div className='sessionText'>
                            <h3>PRACTICE 1</h3>
                            <h4>FRI</h4>
                            <h5>{data.FirstPractice.time.slice(0,5)}</h5>
                        </div>
                        <div className='sessionText'>
                            <h3>QUALYFYING</h3>
                            <h4>FRI</h4>
                            <h5>{data.Qualifying.time.slice(0,5)}</h5>
                        </div>
                            <div className='line'></div>
                                <div className='sessionText'>
                                    <h3>PRACTICE 2</h3>
                                    <h4>SAT</h4>
                                    <h5>{data.SecondPractice.time.slice(0,5)}</h5>
                                </div>
                                <div className='sessionText'>
                                    <h3>SPRINT RACE</h3>
                                    <h4>SAT</h4>
                                    <h5>{data.Sprint.time.slice(0,5)}</h5>
                                </div>
                            <div className='line'></div>
                                <div className='sessionText'>
                                    <h3>RACE</h3>
                                    <h4>SUN</h4>
                                    <h5>{data.time.slice(0,5)}</h5>
                                </div>
                                <div className='sessionText'>
                                    <p>Session start time based on GMT + 0</p>
                                </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
        )
    })

    //add the sprint races into the correct position in schedule 
    raceSchedule.splice(3,0, sprintRaceOutput[0])
    raceSchedule.splice(10,0, sprintRaceOutput[1])
    raceSchedule.splice(20,0, sprintRaceOutput[2])
    return (
        <>
         <div className='title'>
            <h2>Schedule</h2>
        </div>
        {raceSchedule}    
        </>
        
    
  )
}

export default Schedule