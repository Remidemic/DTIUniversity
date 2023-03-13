import React, { useState } from 'react';

function LoanPaymentCalculator() {
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
        const payment = (principal * (numerator / denominator)).toFixed(2);

        setMonthlyPayment(payment);
    }

    return ( 
        <>
        <h1>LoanPaymentCalculator</h1>
        
        <form onSubmit={calculateMonthlyPayment}>
            <div>
                <label htmlFor="principal">Loan amount:</label>
                <input type="number" id="principal" value={principal} onChange={(event) => setPrincipal(event.target.value)} />
            </div>
            <div>
                <label htmlFor="interest-rate">Interest rate:</label>
                <input type="number" id="interest-rate" value={interestRate} onChange={(event) => setInterestRate(event.target.value)} />
            </div>
            <div>
                <label htmlFor="loan-term">Loan term:</label>
                <input type="number" id="loan-term" value={loanTerm} onChange={(event) => setLoanTerm(event.target.value)} />
            </div>
            <div>
                <button type="submit">Calculate monthly payment</button>
            </div>
            <div>
                <label htmlFor="monthly-payment">Monthly payment:</label>
                <span id="monthly-payment">{monthlyPayment}</span>
            </div>
        </form>

        </>
    );
}

export default LoanPaymentCalculator;
