import React from 'react';
import "./Picture.css";

function ShowPicture (props) {
    return (
        <div className='picture'>
            <img src={props.src} alt={props.title}/>
        </div>
    )
}

export default ShowPicture;