import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import BSNavbar from './components/Header/BSNavbar';
import BSSchoolFacts from './components/Majors/BSSchoolFacts';
import BSMajorList from './components/Majors/BSMajorList'
import ResultsList from './components/Search/ResultsList';
function App() {

  const MY_KEY = process.env.REACT_APP_API_KEY
  const [data, setData] = useState({})
  const [school, setSchool] = useState('')
  // const [major, setMajor] = useState({})
  // const [key, setKey] = useState({})

  const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=${school}&api_key=${MY_KEY}`

  const searchSchool = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log("success")
        // console.log(response.data.results[0].latest)
        if(response.data.results[0].latest === undefined) {
          console.log ('error')
        }
      })
    }
  }

  return (
    <div className="App">
      <BSNavbar />
      <div className="search">
        <input
          value={school}
          onChange={event => setSchool(event.target.value)}
          onKeyDown={searchSchool}
          placeholder='Enter School'
          type="text" />
      </div>

     <ResultsList data={data}/>
      <br/>
      
      <BSSchoolFacts data={data} />
      <br/>
      <BSMajorList data={data} />
    </div>
  );
}

export default App;

// <MajorFacts
//   data={data}
//   majorPick={major}
//   keyPick={key} />

// <MajorsList
//   data={data}
//   onMajorHandler={setMajorHandler}
//   onKeyHandler={setKeyHandler} />

// const setMajorHandler = ({ major }) => {
//   setMajor({ major });
// }
// const setKeyHandler = ({ key }) => {
//   setKey(key);
// }