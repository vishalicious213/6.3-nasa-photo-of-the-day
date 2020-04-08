import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowPicture from './Picture';
import ShowData from './Data';
// import Calendar from './Calendar';
import './GetData.css';

function GetData() {
    // const today = new Date();
    const [nasaData, setNasaData] = useState();
    const [date, setDate] = useState('');

    // console.log(date);

    useEffect(() => {
        const fetchData = () => {
            axios
                // .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
                .get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`)
                .then(response => setNasaData(response.data))
                // .then(console.log(nasaData))
                .catch(error => console.log(error))
        }

        fetchData();
    }, [date]);

    const Calendar = () => {
        function getDate(event) {
            console.log(event.target.value);
            setDate(event.target.value);
        }

        return (
            <div>
                <input type='date' onChange={getDate}/>
            </div>
        )
    }

    if (!nasaData) return <h3>Loading...</h3>;
    // console.log('API KEY: ', process.env.REACT_APP_API_KEY);

    return (
        // console.log('NASA Data: ', nasaData),
        <div className='container'>
            {/* <div>GET NASA PHOTO OF THE DAY DATA</div> */}
            <Calendar />
            <ShowPicture src={nasaData.url} alt={nasaData.title} />
            <ShowData title={nasaData.title} explanation={nasaData.explanation} date={nasaData.date} />
        </div>
    )
}

export default GetData;