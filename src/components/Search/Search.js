import './search.css';
import React, { useState } from 'react';
import axios from 'axios';


function Search(props) {

    const MY_KEY = process.env.REACT_APP_API_KEY
    const [school, setSchool] = useState('')
    const [enterSchool, setEnterSchool] = useState('Enter School')
    const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=${school}&api_key=${MY_KEY}`

    const searchSchool = async (event) => {
        event.preventDefault();
        try {
            axios.get(url).then((response) => {
                if (response.data.metadata.total > 0) {
                    props.onSetResults_('');
                    props.onSetData_(response.data)
                    console.log(response.data.metadata.total)
                    console.log(response.data.results[0].latest)
                } else {
                    props.onSetResults_(`no results for " ${school} " try another search`)
                    props.onSetData_({})
                    return;
                }
            })
        } catch (error) {
            console.error(error); 
        }
    }

    const setSchoolChangeHandler = event => {
        setSchool(event.target.value)
    }

    return (
        <>
            <form className="searchform" onSubmit={searchSchool}>
                <input
                    placeholder={enterSchool}
                    type="text"
                    onChange={setSchoolChangeHandler} 
                />
                <button type='submit' className="button"> Search </button>
            </form>
        </>
    );
}
export default Search;

