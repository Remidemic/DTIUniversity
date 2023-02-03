import React from 'react'
import classes from './SchoolFacts.module.css'




function SchoolFacts({ data }) {


    if (data.results !== null) {



        return (

            <div className={`${classes.box}`}>
                <h4>- School Facts</h4>


                <li className={`${classes.title}`}>
                    Institution name:
                    {data.results ?
                        <h4 className={`${classes.result}`}>
                            {data.results[0].school.name}
                        </h4>
                        : null
                    }
                </li>

                <li className={`${classes.title}`}>Location:
                    {data.results ?
                        <h4 className={`${classes.result}`}>{`${data.results[0].school.city},
                        ${data.results[0].school.state}  
                        ${data.results[0].school.zip}`}
                        </h4>
                        : null
                    }
                </li>

                <li className={`${classes.title}`}>
                    enrolled students - undergrad :

                    {data.results ?
                        <h4 className={`${classes.result}`}>{data.results[0].latest.student.enrollment.undergrad_12_month}</h4>
                        : null
                    }
                </li>

                <li className={`${classes.title}`}>Comsumer rate of completion as a percent :

                    {data.results ?
                        <h4 className={`${classes.result}`}>{data.results[0].latest.completion.consumer_rate.toFixed(2)}</h4>

                        : null
                    }
                </li>

                <li className={`${classes.title}`}>
                    Tuition in state/out of state :
                    {data.results ?
                        <h4 className={`${classes.result}`}> $ {`${data.results[0].latest.cost.tuition.in_state} / $  
                        ${data.results[0].latest.cost.tuition.out_of_state}`}
                        </h4>
                        : null
                    }
                </li>
                <li className={`${classes.title}`}>
                    Room & Board on campus / off campus :
                    {data.results ?
                        <h4 className={`${classes.result}`}> $ {`${data.results[0].latest.cost.roomboard.oncampus} / $  
                        ${data.results[0].latest.cost.roomboard.offcampus}`}
                        </h4>
                        : null
                    }
                </li>

                <li className={`${classes.title}`}>
                    Median Debt of students who completed program
                    {data.results ?
                        <h4 className={`${classes.result}`}>
                            $ {data.results[0].latest.aid.median_debt.completers.overall}
                        </h4>
                        : null
                    }
                </li>

                <li className={`${classes.title}`}>
                    university portfolio balance of student debt in direct loans
                    {data.results ?
                        <h4 className={`${classes.result}`}>
                            $ {data.results[0].latest.aid.portfolio.direct_loans.amount}
                        </h4>
                        : null
                    }
                </li>




            </div>
        )
    }
}

export default SchoolFacts