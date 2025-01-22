import { useState } from "react";
import React from "react";


export default function BookingForm({availableTimes, updateTimes}) {
        const [formData, setFormData]=useState({
                time: "",
                guest: 1,
                occasion: "Birthday"
               }   
              )
        
              const [date, setdate]=useState("")
        
        
              function handleChange(e) {
                var {id,value} = e.target;
                setFormData ((prev)=> {
                    return {
                        ...prev,
                        [id]: value
                    } }) }
        
                    function handleDateChange(e){
                        var selectedDate = e.target.value
                        setdate(selectedDate);
                        updateTimes(selectedDate)
                    }


    return (
        <>
        <h1>Book Now</h1>
        <form className="form">
          <fieldset>
            <div className="field">
                <label htmlFor="res-date">Choose Date  <sup>*</sup></label>
                <input type="date" id="res-date"  value={date} onChange={handleDateChange}  />
            </div>
            <div className="field">
                <label htmlFor="res-time">Choose time <sup>* </sup> </label>
                <select id="res-time" value={formData.time} onChange={handleChange}>
                            {availableTimes.map((time) => (
                       <option key={time} value={time}>
                        {time}
                    </option>
                    ))}

                </select>
            </div>
            <div className="field">
                <label htmlFor="guests">Number of guests  <sup>* </sup></label>
                <input type="number" id="guests" value={formData.guest} onChange={handleChange}  placeholder="1" min="1" max="10" />
            </div>
            <div className="field">
                <label htmlFor="occasion"> Occasion <sup>* </sup></label>
                <select id="occasion" value={formData.occasion} onChange={handleChange}   >
                    <option>Birthday</option>
                    <option>Anniverssary</option>
                </select>
            </div>
            <div className="field">
                <input type="submit" value="make your reservation" />
            </div>
         </fieldset>
        </form>
        </>
    )
}
