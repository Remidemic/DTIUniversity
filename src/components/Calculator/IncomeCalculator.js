import React, { useState } from "react";

function IncomeCalculator() {
    const [annualIncome, setAnnualIncome] = useState(0);
    const [monthlyRent, setMonthlyRent] = useState(0);
    const [monthlyLoanPayment, setMonthlyLoanPayment] = useState(0);
    const [disposableMonthlyIncome, setDisposableMonthlyIncome] = useState(0);

    const handleIncomeChange = (event) => {
        setAnnualIncome(Number(event.target.value));
    };

    const handleRentChange = (event) => {
        setMonthlyRent(Number(event.target.value));
    };

    const handleLoanPaymentChange = (event) => {
        setMonthlyLoanPayment(Number(event.target.value));
    };

    const calculateDisposableIncome = () => {
        const monthlyIncome = annualIncome / 12;
        const monthlyExpenses = monthlyRent + monthlyLoanPayment;
        const disposableIncome = monthlyIncome - monthlyExpenses;
        setDisposableMonthlyIncome(disposableIncome);
    };

    return (
        <div>
            <h2>Income Calculator</h2>
            <label>
                Annual Income:
                <input type="number" value={annualIncome} onChange={handleIncomeChange} />
            </label>
            <br />
            <label>
                Monthly Rent:
                <input type="number" value={monthlyRent} onChange={handleRentChange} />
            </label>
            <br />
            <label>
                Monthly Loan Payment:
                <input type="number" value={monthlyLoanPayment} onChange={handleLoanPaymentChange} />
            </label>
            <br />
            <button onClick={calculateDisposableIncome}>Calculate Disposable Income</button>
            <br />
            <br />
            <br />
            <h3>**** Disposable Monthly Income: {disposableMonthlyIncome} ******</h3>
            <br />
            <br />
            <br />
        </div> 
    );
}

export default IncomeCalculator;
