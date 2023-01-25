import React from 'react'

function Test(props) {
    return (<>
        <p>Test Component</p>

        <p>{props.roughhh.map((person) => 
            <li key={person.id}>
                {person.first_name}
            </li>
        )
        }</p>
    </>)
}
export default Test



// {
//     props.users.map((user) => (
//         <li key={user.id}>
//             {user.name} ({user.age} years old)
//         </li>
//     ))
// }