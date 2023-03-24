import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./calc.css";

const LoanPaymentCalculator = (props) => {

    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('5.0');
    const [loanTerm, setLoanTerm] = useState('10');
    const [monthlyPayment, setMonthlyPayment] = useState('');
    const [annualIncome, setAnnualIncome] = useState('');
    const [dime, setDime] = useState(0);

    const calculateMonthlyPayment = (event) => {
        event.preventDefault();
        const monthlyInterestRate = interestRate / 1200;
        const numberOfPayments = loanTerm * 12;
        const numerator = monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments;
        const denominator = (1 + monthlyInterestRate) ** numberOfPayments - 1;
        const payment = (principal * (numerator / denominator)).toFixed(0);
        setMonthlyPayment(payment);
        props.onSetLoanPayment_(payment);
    }

    const handleIncomeChange = (event) => {
        setAnnualIncome(Number(event.target.value));
    };

    const handleRentChange = () => { };
    const handleDIMEChange = () => { };
    const handleLoanPaymentChange = () => { };
    const calculateDisposableIncome = () => {
        const monthlyIncome = annualIncome / 12;
        const monthlyExpenses = Number(props.rent_) + Number(monthlyPayment);
        const disposableIncome = monthlyIncome - monthlyExpenses;
        setDime(disposableIncome.toFixed(2));
    };

    return (<>
        <Form onSubmit={calculateMonthlyPayment}>
            <hr color='black'></hr>
            <Row>
                <Col xs={5}>
                    <label>Loan amount:</label>
                </Col>
                <Col>
                    <input className='inputfield' type="number" placeholder='enter loan amount' id="principal" value={principal} onChange={(event) => setPrincipal(event.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col xs={5}>
                    <label>Interest rate:</label>
                </Col>
                <Col>
                    <input className='inputfield' type="number" id="interest-rate" value={interestRate} onChange={(event) => setInterestRate(event.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col xs={5}>
                    <label> Loan term:</label>
                </Col>
                <Col>
                    <input className='inputfield' type="number" id="loan-term" value={loanTerm} onChange={(event) => setLoanTerm(event.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col xs={5}>
                    <Button className='button_' variant="primary"
                        onClick={calculateMonthlyPayment}>
                        Mnthly Pymt
                    </Button>
                </Col>
                <Col>
                    <input className='inputfield' id="monthly-payment" value={monthlyPayment} onChange={handleLoanPaymentChange} />
                </Col>
            </Row>
            <hr color='black' />
        </Form>
        <Form onSubmit={calculateDisposableIncome}>
            <Row>
                <Col xs={5}><label> Annual Income:</label></Col>
                <Col>
                    <input className='inputfield' type="number" placeholder='enter income' value={annualIncome} onChange={handleIncomeChange} />
                </Col>
            </Row>
            <Row>
                <Col xs={5}><label> Monthly Rent:</label></Col>
                <Col>
                    <input className='inputfield' type="number" placeholder='click a city ^' value={props.rent_} onChange={handleRentChange} />
                </Col>
            </Row>
            <hr color='black'></hr>
            <Row>
                <Col xs={5}>
                    <Button variant='primary' onClick={calculateDisposableIncome}>DIME*</Button>
                </Col>
                <Col><input className='inputfield' value={dime} onChange={handleDIMEChange} /></Col>
            </Row>
            <br />
                <h6>DIME = Disposable Income (per) Month Expected</h6>
            <hr color='black'></hr>
            <Row>
                <Col xs={5}>
                    <Link to='/DTIUniversity/'>
                        <Button variant="primary">Start Over</Button>
                    </Link>
                </Col>
                <Col>
                </Col>
            </Row>
            <br />
            <Row>
                <h5>sources</h5>
                <h6><a target="_blank" rel="noreferrer" href='https://collegescorecard.ed.gov/'>Loan Amount</a></h6>
                <h6><a target="_blank" rel="noreferrer" href='https://studentaid.gov/understand-aid/types/loans/interest-rates'>Current Interest rate</a></h6>
                <h6><a target="_blank" rel="noreferrer" href='https://www.extraspace.com/blog/moving/city-guides/best-cities-for-young-professionals/'> average rent by city</a></h6>
                <h6><a target="_blank" rel="noreferrer" href='https://www.extraspace.com/blog/moving/city-guides/best-cities-for-young-professionals/'> average income by degree via institution providing the program</a></h6>
                <br />
            </Row>
        </Form>
    </>
    );
}

export default LoanPaymentCalculator;
