import React, { useState } from 'react';
import COLD from './COLD';
// import IncomeCalculator from './IncomeCalculator';
// import LoanPaymentCalculator from './LoanPaymentCalculator';
import NewLoanCalc from './NewLoanCalc';
import './calc.css';



function CalcMain() {



    const [rent, setRent] = useState('');
    const setRentHandler = (rent) => { setRent(rent) };

    const [loanPayment, setLoanPayment] = useState('');
    const setLoanPaymentHandler = (loanPayment) => { setLoanPayment(loanPayment) }

    return (
        <>
            <h3 className='center'>You graduated! Where will you live? </h3>
                    <h6>(click a city)</h6>
                <COLD onSetRent={setRentHandler} />

            <NewLoanCalc onSetLoanPayment_={setLoanPaymentHandler} rent_={rent} loanPayment_={loanPayment} />

                    {/* <LoanPaymentCalculator onSetLoanPayment_={setLoanPaymentHandler} />
                    <br />
                    <IncomeCalculator rent_={rent} loanPayment_={loanPayment} /> */}
        </>
    )
}

export default CalcMain