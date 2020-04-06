import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowPicture from './Picture';
import ShowData from './Data';

function GetData() {
    const [nasaData, setNasaData] = useState();

    useEffect(() => {
        const fetchData = () => {
            axios
                // .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
                .get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
                .then(response => setNasaData(response.data))
                // .then(console.log(nasaData))
                .catch(error => console.log(error))
        }

        fetchData();
    }, []);

    if (!nasaData) return <h3>Loading...</h3>;
    // console.log('API KEY: ', process.env.REACT_APP_API_KEY);

    return (
        console.log('NASA Data: ', nasaData),
        <div>
            {/* <div>GET NASA PHOTO OF THE DAY DATA</div> */}
            <ShowPicture src={nasaData.url} alt={nasaData.title} />
            <ShowData title={nasaData.title} explanation={nasaData.explanation} date={nasaData.date} />
        </div>
    )
}

export default GetData;