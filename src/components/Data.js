import React from 'react';
import "./Data.css";

function ShowData (props) {
    return (
        <div className='data'>
            <div>{props.title}</div>
            <div>{props.explanation}</div>
            <div>{props.date}</div>
            <img src={props.src} alt={props.title}/>
        </div>
    )
}

export default ShowData;