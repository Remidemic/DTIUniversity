// cost of living data
// import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './calc.css';
// import { useState } from 'react';


const DATA = [
    { id: 1, city: "Austin, TX", rent: 1106 },
    { id: 2, city: "Boston, MA", rent: 1369 },
    { id: 3, city: "San Francisco, CA ", rent: 1632 },
    { id: 4, city: "Des Moines, IA", rent: 775 },
    { id: 5, city: "Madison, WI", rent: 959 },
    { id: 6, city: "Minneapolis, MN", rent: 898 },
    { id: 7, city: "Nashville, TN", rent: 902 },
    { id: 8, city: "Omaha, NE", rent: 819 },
    { id: 9, city: "Pittsburgh, PA", rent: 844 },
    { id: 10, city: "Portland, OR", rent: 1025 },
    { id: 11, city: "Raleigh, NC", rent: 966 },
    { id: 12, city: "Salt Lake City, UT", rent: 844 },
    { id: 13, city: "Denver, CO", rent: 1035 },
    { id: 14, city: "Seattle, WA", rent: 1266 },
    { id: 15, city: "Washington, DC", rent: 1362 }
]

function COLD(props) {

    function logRent(event) {
        event.preventDefault();
        props.onSetRent(event.target.value)
    }

    return (
        <>
            <div >
                {/* <h1> Pick a city</h1> */}
                <ul className='container'>
                    {DATA.map((cost) => (
                        <div key={cost.id} className="item">
                            {/* $ {cost.rent}    <br /> */}
                            <Button className='city' variant="secondary" value={cost.rent} onClick={logRent}>
                                {cost.city}
                            </Button>
                        </div> 
                    ))}
                </ul>
            </div>
        </>
    )
} 

export default COLD