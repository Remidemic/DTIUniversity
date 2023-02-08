
import React, { useState } from 'react';
import axios from 'axios';

const Search = (props) => {

    const MY_KEY = process.env.REACT_APP_API_KEY
    // const [data, setData] = useState({})

    const [data, setData] = useState({})
    const [school, setSchool] = useState('')


    // add latest year hardcoded into query string. check docs to see how (2019? 2020?)

    const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=${school}&api_key=${MY_KEY}`

    const searchSchool = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                // setData(response.data)
                props.onDataHandler(response.data)
                console.log(response.data.results[0].latest)
            })
        }
    }

    return <>
    
        <input
            value={school}
            onChange={event => {setSchool(event.target.value)
                console.log(event.target.value)
            }}
            onKeyDown={searchSchool}
            placeholder='Enter School component'
            type="text" />
            
    </>
}

export default Search