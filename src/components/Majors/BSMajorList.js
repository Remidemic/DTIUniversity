import Accordion from 'react-bootstrap/Accordion';

function BSMajorList({data}) {
    return (

        <>
            {data.results ?
                <div>
                        <p className='fw-bolder'> {data.results[0].latest.programs.cip_4_digit.length}
                        <span className='fw-light'></span> programs listed at {data.results[0].school.name} </p>
                        <p>Click a major for details</p>




                    {data.results[0].latest.programs.cip_4_digit.map((major, index) => {
                        const key = index;
                        const hasEarnings = () => {
                            if ((major.earnings.highest["1_yr"].overall_median_earnings !== null) ||
                                (major.earnings.highest["2_yr"].overall_median_earnings !== null) ||
                                (major.earnings.highest["3_yr"].overall_median_earnings !== null)
                            ) { return <>$</> }
                        }
                        const certif = () =>{
                            if (major.credential.title === "Associate's Degree" ) {
                                return <>A</>
                            } else if (major.credential.title === "Bachelor’s Degree") {
                                return <>B</>
                            } else if (major.credential.title === "Master's Degree") {
                                return <>M</>
                            } else if (major.credential.title === "Doctoral Degree") {
                                return <>D</>
                            } 
                            else {
                                return null
                            }
                        }
                        return (
                            <div 
                                key={key}
                                >
                                <Accordion>
                                    <Accordion.Item eventKey= {`${key}`}>
                                        <Accordion.Header> {key}. {major.title} {hasEarnings()} {certif()}  </Accordion.Header>
                                        <Accordion.Body>
                                            <div>
                                                {/* <p>Program Major {key}: {major.title}</p> */}
                                                <p>Certificate: {major.credential.title}</p>
                                                <p>overall median earnings:</p>
                                                <p>1st yr: ${major.earnings.highest["1_yr"].overall_median_earnings}</p>
                                                <p>2nd yr: ${major.earnings.highest["2_yr"].overall_median_earnings}</p>
                                                <p>3rd yr: ${major.earnings.highest["3_yr"].overall_median_earnings}</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        )
                    })}
                </div>
                : null
            }
        </>
    );
}

export default BSMajorList;
