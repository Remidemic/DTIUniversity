import React from 'react'
import details from './DetailsCard.module.css'


function DetailsCard(props) {
    return (
        <div className={`${details.frame}`} >


            <h3> Average net price - cost.avg_net_price.overall </h3>
            <h3>in state tuition - cost.tuition.in_state</h3>
            <h3>out of state tuition - cost.tuition.out_of_state</h3>
            <h3>Program Name - cost.tuition.out_of_state</h3>
            <h3>Median average net price amongst institutions with the same predominant degree category - latest.cost.avg_net_price.consumer.median_by_pred_degree</h3>


        </div>
    )
}

export default DetailsCard
// latest.cost.avg_net_price.consumer.median_by_pred_degree = Median average net price amongst institutions with the same predominant degree category