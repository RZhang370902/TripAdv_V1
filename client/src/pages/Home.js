import React from "react";
import axios from 'axios';
import { useEffect, useState} from 'react';

function Home() {

    const [listOfTrips, setListOfTrips] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3002/trips").then((response) => {
        setListOfTrips(response.data); //save data received into listOfTrips
      });
  
    }, []);
  

    return (
        <div>
        <h1>Home</h1>
        <div>
                {listOfTrips.map( (value, key) => {
                return <div className='trip' key = {value.id}>
                <div className='trip-id'>  {"Trip ID: "}{value.id}  </div>
                <div className='trip-body'>  
                    <div className='trip-city'>  {"City: "}{value.city}  </div>
                    <div className='trip-flight'>  {"Flight: "}{value.flight_number}  </div>
                    <div className='trip-date'>  {"Date: "}{value.arrival_date}  </div>
                    <div className='trip-duration'>  {"Duration: "}{value.duration}{" days"}  </div>
                    <div className='trip-price'>  {"Price: "}{value.price}{" "}{value.currency}  </div>
                </div>
                </div>
            })}
        </div>
        </div>
    );
    }

export default Home;