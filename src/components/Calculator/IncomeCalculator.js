import React, { useState } from "react";

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
            <h3>Disposable Monthly Income: ${disposableMonthlyIncome}</h3>
            <br />
            <br />
            <br />
        </div>
    );
}

export default IncomeCalculator;
