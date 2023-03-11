import React, { useState } from 'react';
import BSNavbar from '../components/Nav/BSNavbar';
import BSSchoolFacts from '../components/Results/BSSchoolFacts';
import BSMajorList from '../components/Results/BSMajorList'
import ResultsList from '../components/Results/ResultsList';
import Search from '../components/Search/Search';

function Home() {

    const [results_, setResults_] = useState('')
    const [data_, setData_] = useState({})
    const setData_Handler = (data_) => {
        setData_(data_)
    }
    const setResults_Handler = (results_) => {
        setResults_(results_)
    }

    return (
        <div className="App">
            <BSNavbar />

            <Search
                onSetData_={setData_Handler}
                onSetResults_={setResults_Handler}
            />
            <ResultsList data={data_} />
            <p>{results_}</p>
            <BSSchoolFacts data={data_} />
            <BSMajorList data={data_} />
        </div>
    );
}
export default Home;
