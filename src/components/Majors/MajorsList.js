import React from "react"

const MajorsList = ({ data, onMajorHandler, onKeyHandler }) => {

    return (
        <>
            {data.results ?
                <div>
                    <p> Full list of
                        <button> {data.results[0].latest.programs.cip_4_digit.length} </button>
                        programs listed</p>
                    <br />
                    {data.results[0].latest.programs.cip_4_digit.map((major, index) => {
                        const key = index;
                        return (
                            <div className='majorList'
                            key={key}
                            onClick={() => {
                                onKeyHandler({key});
                                onMajorHandler({major});
                                console.log({major})
                                console.log(key)
                            }} 
                            >
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



