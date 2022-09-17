import React from 'react'
import {useEffect , useState} from 'react'
import {flagArr} from '../Images/ImageExports';
//import all raceresult api calls
import { BahrainAPI, SaudiAPI, AustraliaAPI, ImolaAPI, MiamiAPI, SpainAPI, MonacoAPI, AzerbaijanAPI, CanadaAPI, UkAPI, AustriaAPI, FranceAPI, HungaryAPI, BelgiumAPI, NetherlandsAPI, ItalyAPI, SingaporeAPI, JapanAPI, UsAPI, MexicoAPI, BrazilAPI, AbuDhabiAPI } from './RaceResultAPIS'

// CODE CRIME DOWN BELOW COVER YOUR EYES PLEASE 
function ResultsTable() {
    const[bahrain, setBahrain] = useState([])
    
    useEffect(() => {
        BahrainAPI(setBahrain)
    },[])
    const [result, setResult] = useState(
        useEffect(() => {
            let dnf = {time:"DNF"}
            let dns = {time:"DNS"}
            let avgSpeed = {units: "", speed: "0"}
            setResult(
                bahrain.map((data) => {
                    //if data.Time is missing in api driver did not finish
                        if (data.Time === undefined) {
                            data.Time = dnf
                        }
                    //change time to +1 lap if driver finish lap down
                        if(data.status === "+1 Lap"){
                            data.Time = {time:"+1 Lap"}
                        } 
                    //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                        if (data.FastestLap === undefined) {
                            data.FastestLap = dns
                            data.FastestLap.AverageSpeed = avgSpeed
                            data.Time = dns  
                        }
                          
                    return (
                        <React.Fragment key={data.number}>
                            <tr>
                                <td>{data.position + "."}</td>
                                <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                                <td>{data.Constructor.name}</td>
                                <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                                <td>{data.Time.time}</td>
                                <td>{data.points}</td>                   
                            </tr>
                        </React.Fragment>
                        )
                        })
            )
        },[bahrain])
    )
    const bahrainResultBtn = () => {
        
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            bahrain.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
                  
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[saudi, setSaudi] = useState([])
    useEffect(() => {
        SaudiAPI(setSaudi)
    },[])

    const saudiResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            saudi.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }

    const[australia, setAustralia] = useState([])
    useEffect(() => {
        AustraliaAPI(setAustralia)
    },[])

    const australiaResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            australia.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }

    const[imola, setImola] = useState([])
    useEffect(() => {
        ImolaAPI(setImola)
    },[])

    const imolaResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            imola.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[miami, setMiami] = useState([])
    useEffect(() => {
        MiamiAPI(setMiami)
    },[])

    const miamiResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            miami.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[spain, setSpain] = useState([])
    useEffect(() => {
        SpainAPI(setSpain)
    },[])

    const spainResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            spain.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[monaco, setMonaco] = useState([])
    useEffect(() => {
        MonacoAPI(setMonaco)
    },[])

    const monacoResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            monaco.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[azerbaijan, setAzerbaijan] = useState([])
    useEffect(() => {
        AzerbaijanAPI(setAzerbaijan)
    },[])

    const azerbaijanResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            azerbaijan.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }

    const[canada, setCanada] = useState([])
    useEffect(() => {
        CanadaAPI(setCanada)
    },[])

    const canadaResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            canada.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[uk, setUk] = useState([])
    useEffect(() => {
        UkAPI(setUk)
    },[])

    const ukResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            uk.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[austria, setAustria] = useState([])
    useEffect(() => {
        AustriaAPI(setAustria)
    },[])

    const austriaResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            austria.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[france, setFrance] = useState([])
    useEffect(() => {
        FranceAPI(setFrance)
    },[])

    const franceResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            france.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }

    const[hungary, setHungary] = useState([])
    useEffect(() => {
        HungaryAPI(setHungary)
    },[])

    const hungaryResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            hungary.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[belgium, setBelgium] = useState([])
    useEffect(() => {
        BelgiumAPI(setBelgium)
    },[])

    const belgiumResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            belgium.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }

    const[netherlands, setNetherlands] = useState([])
    useEffect(() => {
       NetherlandsAPI(setNetherlands)
    },[])

    const netherlandsResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            netherlands.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[italy, setItaly] = useState([])
    useEffect(() => {
        ItalyAPI(setItaly)
    },[])

    const italyResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            italy.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[singapore, setSingapore] = useState([])
    useEffect(() => {
        SingaporeAPI(setSingapore)
    },[])

    const singaporeResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            singapore.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[japan, setJapan] = useState([])
    useEffect(() => {
        JapanAPI(setJapan)
    },[])

    const japanResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            japan.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[us, setUs] = useState([])
    useEffect(() => {
        UsAPI(setUs)
    },[])

    const usResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            us.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[mexico, setMexico] = useState([])
    useEffect(() => {
        MexicoAPI(setMexico)
    },[])

    const mexicoResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            mexico.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[brazil, setBrazil] = useState([])
    useEffect(() => {
        BrazilAPI(setBrazil)
    },[])

    const brazilResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            brazil.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
    const[abuDhabi, setAbuDhabi] = useState([])
    useEffect(() => {
        AbuDhabiAPI(setAbuDhabi)
    },[])

    const abuDhabiResultBtn = () => {
        let dnf = {time:"DNF"}
        let dns = {time:"DNS"}
        let avgSpeed = {units: "", speed: "0"}
        setResult(
            abuDhabi.map((data) => {
            //if data.Time is missing in api driver did not finish
                if (data.Time === undefined) {
                    data.Time = dnf
                }
            //change time to +1 lap if driver finish lap down
                if(data.status === "+1 Lap"){
                    data.Time = {time:"+1 Lap"}
                } 
            //if data.FastestLap is missing the driver did not finish a race lap and will have no avg speed data    
                if (data.FastestLap === undefined) {
                    data.FastestLap = dns
                    data.FastestLap.AverageSpeed = avgSpeed
                    data.Time = dns  
                }
               
            return (
                <React.Fragment key={data.number}>
                    <tr>
                        <td>{data.position + "."}</td>
                        <td>{data.Driver.givenName + " " + data.Driver.familyName}</td>
                        <td>{data.Constructor.name}</td>
                        <td>{data.FastestLap.AverageSpeed.speed.slice(0,5) + " " + data.FastestLap.AverageSpeed.units.toUpperCase()}</td>
                        <td>{data.Time.time}</td>
                        <td>{data.points}</td>                   
                    </tr>
                </React.Fragment>
                )
                })
        )
    }
 
    return (
        <>
        <h1>RACE WEEK</h1>
        <div className='button-container'>
        <img src={flagArr[0]} alt='Bahrain' onClick={() => bahrainResultBtn()} ></img>
        <img src={flagArr[1]} alt='Saudi' onClick={() => saudiResultBtn()} ></img>
        <img src={flagArr[2]} alt='Australia' onClick={() => australiaResultBtn()} ></img>
        <img src={flagArr[3]} alt='Miami' onClick={() => miamiResultBtn()} ></img>
        <img src={flagArr[4]} alt='Spain' onClick={() => spainResultBtn()} ></img>
        <img src={flagArr[5]} alt='Monaco' onClick={() => monacoResultBtn()} ></img>
        <img src={flagArr[6]} alt='Azerbaijan' onClick={() => azerbaijanResultBtn()} ></img>
        <img src={flagArr[7]} alt='Canada' onClick={() => canadaResultBtn()} ></img>
        <img src={flagArr[8]} alt='UK' onClick={() => ukResultBtn()} ></img>
        <img src={flagArr[9]} alt='Austria' onClick={() => austriaResultBtn()} ></img>
        <img src={flagArr[10]} alt='France' onClick={() => franceResultBtn()} ></img>
        <img src={flagArr[11]} alt='Hungary' onClick={() => hungaryResultBtn()} ></img>
        <img src={flagArr[12]} alt='Belgium' onClick={() => belgiumResultBtn()} ></img>
        <img src={flagArr[13]} alt='Netherlands' onClick={() => netherlandsResultBtn()} ></img>
        <img src={flagArr[14]} alt='Italy' onClick={() => italyResultBtn()} ></img>
        <img src={flagArr[15]} alt='Singapore' onClick={() => singaporeResultBtn()} ></img>
        <img src={flagArr[16]} alt='US' onClick={() => usResultBtn()} ></img>
        <img src={flagArr[17]} alt='Mexico' onClick={() => mexicoResultBtn()} ></img>
        <img src={flagArr[18]} alt='Brazil' onClick={() => brazilResultBtn()} ></img>
        <img src={flagArr[19]} alt='AbuDhabi' onClick={() => abuDhabiResultBtn()} ></img>
        </div>
        <h1 id='resultsHeader'>RESULTS</h1>
        <div>
        <table>
            <thead>
                <tr>
                    <th>POS</th>
                    <th>DRIVER</th>
                    <th>TEAM</th>
                    <th>AVG SPEED</th>
                    <th>FINISH/GAP</th>
                    <th>POINTS</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
        </table>
        </div>
        </>
  )
}

export default ResultsTable