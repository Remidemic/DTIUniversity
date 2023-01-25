import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Test from './components/Test';
import MajorsList from './components/MajorsList';
import SchoolFacts from './components/SchoolFacts';

function App() {

  const [data, setData] = useState({})
  const [school, setSchool] = useState('')

  const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=${school}&api_key=gj8gTZioRMSkwnGkcBPLtvtZyJV0ShIkGT8LD1Rp`


  // const program = url.map(response.data.results[0].latest.programs);


  const searchSchool = (event) => {
    if (event.key === 'Enter') {

      axios.get(url).then((response) => {
        setData(response.data)

        console.log(response.data.results[0].latest.programs)
      })
    }
  }




  const rough = [{
    "id": 1,
    "first_name": "Marilee",
    "last_name": "Capini",
    "email": "mcapini0@surveymonkey.com",
    "gender": "Female",
    "ip_address": "121.79.205.42"
  }, {
    "id": 2,
    "first_name": "Kaleena",
    "last_name": "Ortelt",
    "email": "kortelt1@seesaa.net",
    "gender": "Polygender",
    "ip_address": "173.202.7.184"
  }, {
    "id": 3,
    "first_name": "Catherine",
    "last_name": "Veazey",
    "email": "cveazey2@upenn.edu",
    "gender": "Female",
    "ip_address": "7.100.193.144"
  }, {
    "id": 4,
    "first_name": "Gabriele",
    "last_name": "Welbourn",
    "email": "gwelbourn3@parallels.com",
    "gender": "Male",
    "ip_address": "245.105.173.227"
  }, {
    "id": 5,
    "first_name": "Amby",
    "last_name": "Longstreet",
    "email": "alongstreet4@wired.com",
    "gender": "Male",
    "ip_address": "63.81.66.83"
  }, {
    "id": 6,
    "first_name": "Nonnah",
    "last_name": "Bearward",
    "email": "nbearward5@irs.gov",
    "gender": "Female",
    "ip_address": "84.56.146.23"
  }, {
    "id": 7,
    "first_name": "Daniella",
    "last_name": "Fallowfield",
    "email": "dfallowfield6@gnu.org",
    "gender": "Female",
    "ip_address": "68.196.142.206"
  }, {
    "id": 8,
    "first_name": "Bondon",
    "last_name": "Archard",
    "email": "barchard7@ustream.tv",
    "gender": "Male",
    "ip_address": "90.117.73.252"
  }, {
    "id": 9,
    "first_name": "Dionysus",
    "last_name": "Chrichton",
    "email": "dchrichton8@eventbrite.com",
    "gender": "Male",
    "ip_address": "203.153.21.100"
  }, {
    "id": 10,
    "first_name": "Bealle",
    "last_name": "Slemming",
    "email": "bslemming9@eepurl.com",
    "gender": "Male",
    "ip_address": "236.0.38.91"
  }]

  return (
    <div className="App">
      <div className="search">
        <input
          value={school}
          onChange={event => setSchool(event.target.value)}
          onKeyPress={searchSchool}
          placeholder='Enter School'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          {/* <div className="School">
            <h1>School Facts:</h1>
            <ul>
              <li>name:</li>
              <li>
                {data.results ?
                  <p>{data.results[0].school.name}</p>
                  : null
                }
              </li>

              <li>cost of attendance per academic year</li>
              <li>
                {data.results ?
                  <p>${data.results[0].latest.cost.attendance.academic_year}</p>
                  : null
                }
              </li>

              <li>
                enrolled students - undergrad
              </li>
              <li>
                {data.results ?
                  <p>{data.results[0].latest.student.enrollment.undergrad_12_month}</p>
                  : null
                }
              </li>

              {/* <li>
                total programs offered at school
              </li>
              <a href=""><li>
                {data.results ?
                  <p>{data.results[0].latest.programs.cip_4_digit.length}</p>
                  : null
                }

              </li></a> */}

          {/* TEST ---------- TEST ---------- TEST --------- TEST */}

          {/* <li>
                {data.results ?
                  <p>
                    <a href=''> {data.results[0].latest.programs.cip_4_digit.length}</a>
                    {data.results[0].latest.programs.cip_4_digit.map((major) =>
                      <li className='majorList' key={Math.random()}>
                        {major.title}
                      </li>)}</p>
                  : null
                }

              </li> */}

          {/* <p>{props.roughhh.map((person) =>
                <li key={person.id}>
                  {person.first_name}
                </li>
              )
              }</p> */}


          {/* ---------------------------------------------------- */}



          {/* <Test roughhh={rough} /> */}


          {/* </ul> */}
          {/* </div> */}
        </div>
        <SchoolFacts data={data} />
        <MajorsList data={data} />
      </div>
    </div>
  );
}

export default App;
