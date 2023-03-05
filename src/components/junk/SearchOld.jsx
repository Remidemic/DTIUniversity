import React, { useState } from 'react'
import axios from 'axios'



function SearchOld(props) {
    const [location, setLocation] = useState('')

    const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=${school}&api_key=${MY_KEY}`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                props.onDataHandler(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
    }
    return (
        <>
            <input
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder='Enter Location'
                type="text" />

        </>
    )
}

export default SearchOld