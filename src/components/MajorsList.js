import React from "react"

const MajorsList =({data}) =>{

    return(
        <ul>
          <li>
                {data.results ?
                    <p>
                        <p> made in Majors component</p>
                        <a href=''> {data.results[0].latest.programs.cip_4_digit.length}</a>
                        {data.results[0].latest.programs.cip_4_digit.map((major) =>
                            <li className='majorList' key={Math.random()}>
                                {major.title}
                            </li>)}</p>
                    : null
                }
            </li>
        </ul>
    )

}
export default MajorsList


// {
//     props.users.map((user) => (
//         <li key={user.id}>
//             {user.name} ({user.age} years old)
//         </li>
//     ))
// }