import BookingForm from "./BookingForm";
import { useReducer, useState } from "react";
import React from "react";



function updateTimes(state, action){
    if (action.type === "update time") return initializeTimes();
    return state
   }


   const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];



export default function Bookingpage() {
    
    
            const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    
           
          

    return (
        <>
             <BookingForm 
             availableTimes={availableTimes}
             updateTimes={ function (selectedDate) {
                dispatch({ type: "update time", payload: selectedDate });
            }}
             
             /> 
        </>
    )
}