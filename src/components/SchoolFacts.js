import React from 'react'

function SchoolFacts({data}) {
    return (

        <>
            <p>SchoolFacts</p>

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


            </ul>

        </>
    )
}

export default SchoolFacts