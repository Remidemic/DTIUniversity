import React from 'react';


function MainResults(props) {

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