import React from "react";
import axios from 'axios'

//api requests for the individual race results
//Probably much easier way to do this without repeating 1000 lines of code 
// setApiCall is whatever useState should be used
export function BahrainAPI(setApiCall) {
    let config = {
        method: 'get',
        url: 'http://ergast.com/api/f1/2022/1/results.json',
        headers: { }
      };
    
      axios(config)
      .then(function (response) {
        console.log((response.data.MRData.RaceTable.Races[0].Results));
        setApiCall(response.data.MRData.RaceTable.Races[0].Results)
      })
      .catch(function (error) {
        console.log(error);
      });      
}

export function SaudiAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/2/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function AustraliaAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/3/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function ImolaAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/4/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function MiamiAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/5/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function SpainAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/6/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function MonacoAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/7/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function AzerbaijanAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/8/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function CanadaAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/9/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function UkAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/10/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function AustriaAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/11/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function FranceAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/12/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function HungaryAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/13/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function BelgiumAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/14/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function NetherlandsAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/15/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function ItalyAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/16/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function SingaporeAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/17/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function JapanAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/18/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function UsAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/19/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function MexicoAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/20/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function BrazilAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/21/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}

export function AbuDhabiAPI(setApiCall) {
  let config = {
      method: 'get',
      url: 'http://ergast.com/api/f1/2022/22/results.json',
      headers: { }
    };
  
    axios(config)
    .then(function (response) {
      console.log((response.data.MRData.RaceTable.Races[0].Results));
      setApiCall(response.data.MRData.RaceTable.Races[0].Results)
    })
    .catch(function (error) {
      console.log(error);
    });      
}