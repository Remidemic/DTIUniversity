// cost of living data
import React from 'react'

const DATA = [
    { id: 1, city: "Austin, TX", rent: 1106 },
    { id: 2, city: "Boston, MA", rent: 1369 },
    { id: 3, city: "Denver, CO", rent: 1035 },
    { id: 4, city: "Des Moines, IA", rent: 775 },
    { id: 5, city: "Madison, WI", rent: 959 },
    { id: 6, city: "Minneapolis, MN", rent: 898 },
    { id: 7, city: "Nashville, TN", rent: 902 },
    { id: 8, city: "Omaha, NE", rent: 819 },
    { id: 9, city: "Pittsburgh, PA", rent: 844 },
    { id: 10, city: "Portland, OR", rent: 1025 },
    { id: 11, city: "Raleigh, NC", rent: 966 },
    { id: 12, city: "Salt Lake City, UT", rent: 844 },
    { id: 13, city: "San Francisco, CA ", rent: 1632 },
    { id: 14, city: "Seattle, WA", rent: 1266 },
    { id: 15, city: "Washington, DC", rent: 1362 }
]

function COLD() {
    return (
        <>
            <h1> COST OF LIVING DATA</h1>
            <ul>
                {DATA.map((cost) => (
                    <li key={cost.id}> City : {cost.city} Rent: ${cost.rent}</li>
                ))}
            </ul>
        </>
    )
}

export default COLD