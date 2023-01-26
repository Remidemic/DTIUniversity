import React, { useState } from "react"

const MajorsList = ({ data }) => {


    // // 
    // const [majorPick, setMajorPick] = useState('');
    // <DetailsCard majorPick={majorPick}/>

    return (
        <>
            {data.results ?
                <div>
                    <p> Full list of
                        <a href=''> {data.results[0].latest.programs.cip_4_digit.length} </a>
                        programs listed</p>
                    <br />
                    {data.results[0].latest.programs.cip_4_digit.map((major, index) => {
                        const key = index;
                        return (

                            <div className='majorList' key={key}>
                                {key} - {major.title} {major.credential.title}
                            </div>
                        )
                    })}
                </div>
                : null
            }
        </>
    )
}
export default MajorsList
