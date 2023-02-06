import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function BSSchoolFacts({ data }) {

    if (data.results !== null) {
        return (

            <ListGroup as="ol">
                
                <div className="fw-bold">school facts: </div>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto" bg="light">
                        <div className="fw-bold">Institution name:</div>
                        {data.results ?
                            <h4 className="fw-light">
                                {data.results[0].school.name}
                            </h4>
                            : null
                        }
                    </div>
                    <Badge bg="primary" pill>

                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Location:</div>

                        {data.results ?
                            <h4 className="fw-light">{`${data.results[0].school.city},
                        ${data.results[0].school.state}  
                        ${data.results[0].school.zip}`}
                            </h4>
                            : null
                        }
                    </div>
                    <Badge bg="primary" pill>

                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Enrolled students - Undergrad :</div>


                        {data.results ?
                            <h4 className="fw-light">{data.results[0].latest.student.enrollment.undergrad_12_month}</h4>
                            : null
                        }
                    </div>
                    <Badge bg="primary" pill>

                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Comsumer rate of completion as a percent:</div>
                        {data.results ?
                            <h4 className="fw-light">{data.results[0].latest.completion.consumer_rate.toFixed(2)}</h4>

                            : null
                        }                </div>
                    <Badge bg="primary" pill>

                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Tuition in state/out of state :</div>
                        {data.results ?
                            <h4 className="fw-light">$ {`${data.results[0].latest.cost.tuition.in_state} / $  
                        ${data.results[0].latest.cost.tuition.out_of_state}`}
                            </h4>
                            : null
                        }
                    </div>
                    <Badge bg="primary" pill>

                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Room & Board on campus / off campus :</div>
                        {data.results ?
                            <h4 className="fw-light"> $ {`${data.results[0].latest.cost.roomboard.oncampus} / $  
                        ${data.results[0].latest.cost.roomboard.offcampus}`}
                            </h4>
                            : null
                        }
                    </div>
                    <Badge bg="primary" pill>

                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Median Debt of students who completed program:</div>
                        {data.results ?
                            <h4 className="fw-light">
                                $ {data.results[0].latest.aid.median_debt.completers.overall}
                            </h4>
                            : null
                        }
                    </div>
                    <Badge bg="primary" pill>

                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Institution's portfolio balance of student debt in direct loans:</div>
                        {data.results ?
                            <h4 className="fw-light">
                                $ {data.results[0].latest.aid.portfolio.direct_loans.amount}
                            </h4>
                            : null
                        }
                    </div>
                    <Badge bg="primary" pill>

                    </Badge>
                </ListGroup.Item>

            </ListGroup>
        );
    };
}

export default BSSchoolFacts;