import React from 'react'
import details from './DetailsCard.module.css'


function DetailsCard(props) {

    let i = props.majorPick.key;

    return (

        <>

        <div className={`${details.frame}`} >

                {props.majorPick ?
                    <p>{ `Major Pick ${i  }`}</p>
                    : null
                }
            

                {/* {props.apple ?
                    <p>{props.apple[0]}</p>
                    : null
                } */}


                {/* {props.data ?
                <p> printed in the details card
                    {data.results[0].latest.programs.cip_4_digit.length}
                    </p>
                    : null
                } */}
            {/* 
            <h1>{props.majorPick}</h1>
            <h3>Program Name - ${props.major[1].cost.tuition.out_of_state} cost.tuition.out_of_state</h3>
            <h3> Average net price - cost.avg_net_price.overall </h3>
            <h3>Median average net price amongst institutions with the same predominant degree category - latest.cost.avg_net_price.consumer.median_by_pred_degree</h3> */}
                {/* <h3>overall median debt for completers aid.median_debt.completers</h3> */}
       
        </div>

        </>
    )
}

export default DetailsCard
// latest.cost.avg_net_price.consumer.median_by_pred_degree = Median average net price amongst institutions with the same predominant degree category