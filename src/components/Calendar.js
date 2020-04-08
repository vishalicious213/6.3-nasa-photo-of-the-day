import React from 'react';

const Calendar = () => {

    function getDate(event) {
        console.log(event.target.value);
    }

    return (
        <div>
            <input type='date' onChange={getDate}/>
        </div>
    )
}

export default Calendar;