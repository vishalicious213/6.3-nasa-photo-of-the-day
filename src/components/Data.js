import React, { useState } from 'react';
import "./Data.css";

function ShowData (props) {
    return (
        <div className='data'>
            <h2>{props.title}</h2>
            <div>{props.explanation}</div>
            <div><b>{props.date}</b></div>
        </div>

        // <div className='button'>Details</div>
    )
}

export default ShowData;