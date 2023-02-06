

const ResultsList = ({data}) =>{

    return(
        <>
            <p className="fw-bold">Results</p>
    {
        data.results ?
        <div>{data.results.map((result, index) => {
            const key = index;
            return (
                <div key={key}> {key}. {result.latest.school.name}, {result.latest.school.city}, {result.latest.school.state}</div>
            )
        })}</div> : null
    }
        </>
    )
}

export default ResultsList