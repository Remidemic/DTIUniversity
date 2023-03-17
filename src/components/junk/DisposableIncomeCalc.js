import React, { useState } from 'react';


//  MODIFY TO FIND NET INCOME AFTER RENT & LOAN PAYMENT 



function DisposableIncomeCalc() {


    // principal 
    const [annualIncome, setAnnualIncome] = useState('');

    // interest rate
    const [rent, setRent] = useState(0);
    const [loanPayment, setLoanPayment] = useState(0);
    const [disposableIncome, setDisposableIncome] = useState(0);

    function calculateMonthlyPayment(event) {
        event.preventDefault();

        const monthlyIncome = annualIncome / 12;
        console.log(` Monthly Income ${monthlyIncome}`);
        const monthlyExpenses = rent + loanPayment;
        console.log(` Monthly Expenses ${monthlyExpenses}`)
        const disposableIncome = monthlyIncome - monthlyExpenses;

        setDisposableIncome(disposableIncome);
    }

    return (

        <>
            <h1>Monthly Disposable Income </h1>
            <form onSubmit={calculateMonthlyPayment}>
                <div>
                    <label htmlFor="annualIncome">ANNUAL INCOME:</label>
                    <input type="number" id="annualIncome" value={annualIncome} onChange={(event) => setAnnualIncome(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="rent">RENT:</label>
                    <input type="number" id="rent" value={rent} onChange={(event) => setRent(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="loanPayment">LOAN PAYMENT:</label>
                    <input type="number" id="loanPayment" value={loanPayment} onChange={(event) => setLoanPayment(event.target.value)} />
                </div>
                <div>
                    <button type="submit">Calculate MONTHLY DISPOSABLE INCOME</button>
                </div>
                <div>
                    <label htmlFor="monthly-payment">MONTHLY DISPOSABLE INCOME:</label>
                    <span id="monthly-payment">{disposableIncome}</span>
                </div>
            </form>

        </>
    );
}

export default DisposableIncomeCalc;
