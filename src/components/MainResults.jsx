import React, { useState } from 'react';
import axios from 'axios';

function MainResults() {
    const [data, setData] = useState({})
    const [school, setSchool] = useState('')
  
    const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=${school}&api_key=gj8gTZioRMSkwnGkcBPLtvtZyJV0ShIkGT8LD1Rp`
  
    const programs =[]
  
    // const program = url.map(response.data.results[0].latest.programs);
  
    
    const searchSchool = (event) => {
      if (event.key === 'Enter') {
  
        axios.get(url).then((response) => {
          setData(response.data)
          
          console.log(response.data.results[0].latest.programs)
        })
      }
    }
    return (
        <div className="container">
            <div className="top">
                <h1>School Facts:</h1>
                <div className="School">
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

                        <li>
                            total programs offered at school
                        </li>
                        <a href=""><li>
                            {data.results ?
                                <p>{data.results[0].latest.programs.cip_4_digit.length}</p>
                                : null
                            }
                        </li></a>

                    </ul>
                </div>
            </div>
        </div>)
}

export default MainResults