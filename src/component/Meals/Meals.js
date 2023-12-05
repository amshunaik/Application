import AvailableMeal from "./AvailableMeal";
import MealSummary from "./MealSummary";
import React,{Fragment, useState} from 'react';
const Meals=(props)=>{
   
    return(
        <Fragment>
            <MealSummary/>
            
            <AvailableMeal/>
        </Fragment>

        

    )
};
export default Meals;