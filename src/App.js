import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import MajorsList from './components/Majors/MajorsList';
import SchoolFacts from './components/SchoolFacts';
import MajorFacts from './components/Majors/MajorFacts';
import Navbar from './components/Navbar';
// import Search from './components/Search/Search';

function App() {

  const MY_KEY = process.env.REACT_APP_API_KEY
  const [data, setData] = useState({})
  const [school, setSchool] = useState('')
  const [major, setMajor] = useState({})
  const [key, setKey] = useState({})

  // add latest year hardcoded into query string. check docs to see how (2019? 2020?)

  const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=${school}&api_key=${MY_KEY}`

  const searchSchool = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data.results[0].latest)
      })
    }
  }
  const setMajorHandler = ({major}) => {
    setMajor({ major });
  }
  const setKeyHandler = ({key}) => {
    setKey(key);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="search">
        <input
          value={school}
          onChange={event => setSchool(event.target.value)}
          onKeyDown={searchSchool}
          placeholder='Enter School'
          type="text" />
      </div>

      {/* <Search onDataHandler={setDataHandler} /> */}
      <SchoolFacts data={data} />
      <MajorFacts
        data={data}
        majorPick={major}
        keyPick={key} />

      <MajorsList
        data={data}
        onMajorHandler={setMajorHandler}
        onKeyHandler={setKeyHandler} />

    </div>
  );
}

export default App;
