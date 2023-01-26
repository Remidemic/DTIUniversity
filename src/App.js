import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import MajorsList from './components/MajorsList';
import SchoolFacts from './components/SchoolFacts';
import Navbar from './components/Navbar';
import DetailsCard from './components/DetailsCard';

function App() {

  const MY_KEY = process.env.REACT_APP_API_KEY
  const [data, setData] = useState({})
  const [school, setSchool] = useState('')

  const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=${school}&api_key=${MY_KEY}`

  const searchSchool = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        // console.log(response.data.results[0].latest.programs)
        console.log(response.data.results[0].latest)
      })
    }
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
      <SchoolFacts data={data} />
      <DetailsCard/>
      <MajorsList data={data} />
    </div>
  );
}

export default App;
