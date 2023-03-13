import React from 'react';
import COLD from './COLD';
import IncomeCalculator from './IncomeCalculator';
import LoanPaymentCalculator from './LoanPaymentCalculator';

function CalcMain() {
    return (
        <>

            <h1>CalcMain</h1>
            <LoanPaymentCalculator />
            <br/>
            <IncomeCalculator/>
            <COLD />
        </>
    )
}

export default CalcMain