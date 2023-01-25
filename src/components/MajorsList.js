import React from "react"

const MajorsList = ({ data }) => {

    return (

        <>
            {data.results ?
                <div>
                    <p> Full list of 
                    <a href=''> {data.results[0].latest.programs.cip_4_digit.length} </a>
                        programs listed</p>
                    <br />
                    {data.results[0].latest.programs.cip_4_digit.map((major) =>
                        <li className='majorList' key={Math.random()}>
                            {major.title} {major.credential.title}
                        </li>)}
                </div>
                : null
            }
        </>

    )

}
export default MajorsList
