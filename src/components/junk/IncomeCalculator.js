import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './calc.css'

function IncomeCalculator(props) {
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
        <div>
            <h2>Income Calculator</h2>
            <label>
                Monthly Loan Payment:
                <input
                    type="number"
                    value={props.loanPayment_}
                    onChange={handleLoanPaymentChange} />
            </label>
            <br />
            <label>
                Annual Income:
                <input
                    type="number"
                    value={annualIncome}
                    onChange={handleIncomeChange} />
            </label>
            <br />
            <label>
                Monthly Rent:
                <input
                    type="number"
                    value={props.rent_}
                    onChange={handleRentChange} 
                    />
            </label>
            <br />

            <button
                onClick={calculateDisposableIncome}>Calculate Disposable Income</button>
            <br />
            <br />
            <br />
            <h3> you could earn <span> ${disposableMonthlyIncome} </span>  each month with a degree from (x) in (y), living in (z) city. Skeptical about what life could be like after graduating?  Reach out to ( school, hyperlink, email template) to find out while youre still deciding.</h3>
            <br />
            <Link to='/DTIUniversity/'>  <Button variant="primary">Start Over</Button> </Link>

            <br />
            <br />
        </div>
    );
}

export default IncomeCalculator;
