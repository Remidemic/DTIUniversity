import React, { useState, useEffect } from 'react'
import axios from 'axios'



function Search() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=51ae842dba68e835693284956eaa11a5`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
    }

    // useEffect(() => {
    //     searchLocation("denver")
    // }, []);

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

export default Search