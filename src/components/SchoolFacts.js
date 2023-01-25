import React from 'react'

function SchoolFacts({ data }) {
    return (

        <>
            <p>- School Facts</p>


            <li>institution name:
                {data.results ?
                    <p>{data.results[0].school.name}</p>
                    : null
                }
            </li>

            <li>Full price of attendance per academic year

                {data.results ?
                    <p>${data.results[0].latest.cost.attendance.academic_year}</p>
                    : null
                }
            </li>

            <li>
                enrolled students - undergrad

                {data.results ?
                    <p>{data.results[0].latest.student.enrollment.undergrad_12_month}</p>
                    : null
                }
            </li>

        </>
    )
}

export default SchoolFacts