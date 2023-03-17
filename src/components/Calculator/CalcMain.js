import React, { useState } from 'react';
import COLD from './COLD';
import IncomeCalculator from './IncomeCalculator';
import LoanPaymentCalculator from './LoanPaymentCalculator';
// import './calc.css';

function CalcMain() {
    const [rent, setRent] = useState('');
    const setRentHandler = (rent) => { setRent(rent) };
    const [loanPayment, setLoanPayment] = useState('');
    const setLoanPaymentHandler = (loanPayment) => { setLoanPayment(loanPayment) }

    return (
        <>
            <h1>Future Income Calculator</h1>
            <COLD onSetRent={setRentHandler} />
            <LoanPaymentCalculator onSetLoanPayment_={setLoanPaymentHandler} />
            <br />
            <IncomeCalculator rent_={rent} loanPayment_={loanPayment} />
        </>
    )
}

export default CalcMain