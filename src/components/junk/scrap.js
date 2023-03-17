import React, {useState}from 'react';
import { Document, Page } from "react-pdf";


function Scrap() {

    const [numPage, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPage);
        setPageNumber(1);
    }


    return (

        <div>
            <header>
                <Document file="./../../../public/JGuzman_Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page height = '600' pageNumber={pageNumber}/>
                </Document>
            </header>

        </div>
    )
}

export default Scrap


// write a react.js component that performs an equation.
// The form inputs are: annualIncome, monthlyRent, 
// monthlyLoanPayment.The function of this equation will 
// divide annualIncome by 12 to find the monthlyIncome.Then
//  add the monthlyRent to the monthlyLoanPayment to make a
//   new variable monthlyExpenses.Then subtract the 
//   monthlyExpenses from monthlyIncome to find 
//   disposableMonthlyIncome

// update this component so the inputs and outputs are suitable for currency
