import React, { useState } from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./calc.css";


function LoanPaymentCalculator(props) {

    // loan calc 

    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('5.0');
    const [loanTerm, setLoanTerm] = useState('10');
    const [monthlyPayment, setMonthlyPayment] = useState('');

    function calculateMonthlyPayment(event) {
        event.preventDefault();

        const monthlyInterestRate = interestRate / 1200;
        const numberOfPayments = loanTerm * 12;
        const numerator = monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments;
        const denominator = (1 + monthlyInterestRate) ** numberOfPayments - 1;
        const payment = (principal * (numerator / denominator)).toFixed(0);

        setMonthlyPayment(payment);

        props.onSetLoanPayment_(payment);

    }

    // income calc 

    const [annualIncome, setAnnualIncome] = useState('');
    // const [monthlyRent, setMonthlyRent] = useState('');
    // const [monthlyLoanPayment, setMonthlyLoanPayment] = useState('');
    const [disposableMonthlyIncome, setDisposableMonthlyIncome] = useState(0);

    const handleIncomeChange = (event) => {
        setAnnualIncome(Number(event.target.value));
    };

    // console.log(props.loanPayment_)

    const handleRentChange = () => {
        // setMonthlyRent(Number(event.target.value));
    };

    const handleLoanPaymentChange = () => {
        // setMonthlyLoanPayment(Number(event.target.value));
    };

    const calculateDisposableIncome = () => {
        const monthlyIncome = annualIncome / 12;
        const monthlyExpenses = Number(props.rent_) + Number(props.loanPayment_);
        const disposableIncome = monthlyIncome - monthlyExpenses;
        setDisposableMonthlyIncome(disposableIncome.toFixed(2));
    };


    return (
        <Form onSubmit={calculateMonthlyPayment}>
            <hr color='black'></hr>

            <Row>
                <Col xs={5}>
                    {/* populate via props from school facts */}
                    <label htmlFor="principal">Loan amount:</label>
                </Col>
                <Col>
                    <input type="number" id="principal" value={principal} onChange={(event) => setPrincipal(event.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col xs={5}>
                    <label htmlFor="interest-rate">Interest rate:</label>
                </Col>
                <Col>
                    <input type="number" id="interest-rate" value={interestRate} onChange={(event) => setInterestRate(event.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col xs={5}>
                    <label htmlFor="loan-term">Loan term:</label>
                </Col>
                <Col>
                    <input type="number" id="loan-term" value={loanTerm} onChange={(event) => setLoanTerm(event.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col xs={5}>
                    {/* <label htmlFor="monthly-payment">Monthly payment:</label> */}
                    <button className='button_'
                        onClick={calculateDisposableIncome}>
                        Monthly Payment
                    </button>
                </Col>
                <Col>
                    <input id="monthly-payment" value={monthlyPayment} />
                </Col>
            </Row>
            <Row>
                <Col xs={5}>
                    <label>Annual Income:</label>
                </Col>
                <Col>
                    <input type="number" value={annualIncome} onChange={handleIncomeChange} />
                </Col>
            </Row>
            <Row>
                <Col xs={5}>
                    <label> Monthly Rent:</label>
                </Col>
                <Col>
                    <input type="number" placeholder='click a city ^' value={props.rent_} onChange={handleRentChange} />
                </Col>
            </Row>

            <hr color='black'></hr>

            <Row>
                <Col xs={5}>
                    <Button variant='primary'>DIME*</Button>                </Col>
                <Col>
                    <input />
                </Col>
            </Row>
<br />
            <Row>
                <Col xs={5}>
                    <Link to='/DTIUniversity/'>
                        <Button variant="primary">
                            Start Over
                        </Button>
                    </Link>
                </Col>
                <Col>

                </Col>
            </Row>

            <Row>
                <hr color='black'></hr>
                <h5>sources</h5>
                <h6><a target="_blank" rel="noreferrer" href='https://collegescorecard.ed.gov/'>Loan Amount</a></h6>
                <h6><a target="_blank" rel="noreferrer" href='https://studentaid.gov/understand-aid/types/loans/interest-rates'>Current Interest rate</a></h6>
                <h6><a target="_blank" rel="noreferrer" href='https://www.extraspace.com/blog/moving/city-guides/best-cities-for-young-professionals/'> average rent by city</a></h6>
                <h6><a target="_blank" rel="noreferrer" href='https://www.extraspace.com/blog/moving/city-guides/best-cities-for-young-professionals/'> average income by degree via institution providing the program</a></h6>

                <h6>DIME = disposable income per month expected</h6>
                <br />
            </Row>
        </Form>
    );
}

export default LoanPaymentCalculator;
