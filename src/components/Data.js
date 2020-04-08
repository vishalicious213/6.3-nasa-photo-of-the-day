import React, { useState } from 'react';
import "./Data.css";

function ShowData (props) {
    const [isToggled, setToggled] = useState(false);

    const toggleDetail = () => setToggled(!isToggled);

    const Details = () => {
        return (
            <div className='data'>
                <h2>{props.title}</h2>
                <div>{props.explanation}</div>
                <div><span onClick={toggleDetail} className='hideButton'>Hide</span><b>{props.date}</b></div>
            </div>
        )
    }

    const DetailsButton = () => {
        return <div onClick={toggleDetail} className='button'>Details</div>
    }

    return (
        isToggled === false ? <DetailsButton /> : <Details />
    )
}

export default ShowData;