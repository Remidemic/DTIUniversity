import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import BSNavbar from './components/Header/BSNavbar';
import BSSchoolFacts from './components/Majors/BSSchoolFacts';
import BSMajorList from './components/Majors/BSMajorList'
import ResultsList from './components/Search/ResultsList';
import Search from './components/Search/Search';
function App() {

  // const MY_KEY = process.env.REACT_APP_API_KEY
  // const [data, setData] = useState({})
  // const [school, setSchool] = useState('')
  // const [results, setResults] = useState('')
  const [results_, setResults_] = useState('')
  const [data_, setData_] = useState({})

  const setData_Handler = (data_) => {
    setData_(data_)
  }
  const setResults_Handler = (results_) => {
    setResults_(results_)
  }

  // data_ !== null ?  console.log(data_) : console.log(null);
  // data ?   console.log(data) : console.log(null);

  // const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=${school}&api_key=${MY_KEY}`

  // const searchSchool = (event) => {
  //   // console.log(event.target.value)

  //   if (event.key === 'Enter') {
  //     axios.get(url).then((response) => {
  //       if (response.data.metadata.total > 0) {
  //         setData(response.data)
  //         setResults('');
  //         console.log(response.data.metadata.total)
  //         console.log(response.data.results[0].latest)
  //       } else {
  //         setResults(`no results for " ${school} " try another search`);
  //         setData({});
  //         return;
  //       }
  //     })
  //   }
  // }


  // const setSchoolChangeHandler = event => {
  //   setSchool(event.target.value)
  // }

  return (
    <div className="App">
      <BSNavbar />
      <Search onSetData_={setData_Handler} onSetResults_={setResults_Handler} />
      {/* 
      <div className="search">
        <input
          placeholder='Enter School'
          type="text"
          onChange={setSchoolChangeHandler}
          onKeyDown={searchSchool}
        />
      </div>
      <div>
        <button className="search">search</button>
      </div> */}

      <ResultsList data={data_} />
      <p>{results_}</p>
      <BSSchoolFacts data={data_} />
      <br />
      <BSMajorList data={data_} />
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