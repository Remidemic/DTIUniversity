import './../../App.css';
import React, { useState } from 'react';
import axios from 'axios';

function Search(props) {

    const MY_KEY = process.env.REACT_APP_API_KEY
    const [school, setSchool] = useState('')
    const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=${school}&api_key=${MY_KEY}`

    const searchSchool = (event) => {
        if (event.key === 'Enter') {
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
        }
    }

    const setSchoolChangeHandler = event => {
        setSchool(event.target.value)
    }

    return (
        <div className="App">
            <div className="search">
                <input
                    placeholder='Enter School'
                    type="text"
                    onChange={setSchoolChangeHandler}
                    onKeyDown={searchSchool}
                />
            </div>
        </div>
    );
}

export default Search;
