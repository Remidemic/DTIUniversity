import React from "react"
// import MajorIncome from "../junk/MajorIncome";

const MajorsList = ({ data, onMajorHandler, onKeyHandler }) => {


    return (
        <>
            {data.results ?
                <div>
                    <p> Full list of
                        <button> {data.results[0].latest.programs.cip_4_digit.length} </button>
                        programs listed</p>

                    <h1> Click a major for details</h1>
                    <br />
                    {data.results[0].latest.programs.cip_4_digit.map((major, index) => {
                        const key = index;
                        const hasEarnings = () => {
                            if ((major.earnings.highest["1_yr"].overall_median_earnings !== null) ||
                                (major.earnings.highest["2_yr"].overall_median_earnings !== null) ||
                                (major.earnings.highest["3_yr"].overall_median_earnings !== null)
                            ) { return <>$$</> }
                        }
                        return (
                            <div className='majorList'
                                key={key}
                                onClick={() => {
                                    onKeyHandler({ key });
                                    onMajorHandler({ major });
                                    console.log({ major })
                                }}>
                                {key} - {major.title} - {hasEarnings()}
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



