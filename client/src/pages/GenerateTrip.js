import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

//use formik to handle form data
//npm install formik

//use yup to validate form data
//yup always comes with formik
//npm install yup

function GenerateTrip() {   

    const initialValues = {
        city: "",
        flight_number: "",
        arrival_date: "",
        duration: "",
        price: "",
        currency: ""
    }

    const validationSchema = Yup.object({
        city: Yup.string().required("You must input a city"),
        flight_number: Yup.string().required("You must input a flight number"),
        arrival_date: Yup.date().required("You must input an arrival date"),
        duration: Yup.number().required("You must input a duration"),
        price: Yup.number().required("You must input a price"),
        currency: Yup.string().required("You must input a currency")
    })

    const onSubmit = (data) => {  
        console.log(data);
        axios.post("http://localhost:3002/trips", data).then((response) => {
            console.log("It works!") //save data received into listOfTrips
          });
      
        }
    

    return (
        <div className="generateTripPage">
        
        
            <div className="generate-trip-container">
            <h1>Generate a Trip</h1>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>
                        <label>City:</label>
                        <br></br>
                        <Field
                            name="city"
                            //type="text"
                            placeholder="City"
                            id="gnerate-trip-input"
                        />
                        <ErrorMessage name="city" component="span" />
                        <br></br>
                        <label>Flight Number:</label>
                        <br></br>
                        <Field
                            name="flight_number"
                            //type="text"
                            placeholder="Flight Number"
                            id="gnerate-trip-input"
                        />
                        <ErrorMessage name="flight_number" component="span" />
                        <br></br>
                        <label>Arrival Date:</label>
                        <br></br>
                        <Field
                            name="arrival_date"
                            type="date"
                            placeholder="Arrival Date"
                            id="gnerate-trip-input"
                        />
                        <ErrorMessage name="arrival_date" component="span" />
                        <br></br>
                        <label>Duration:</label>
                        <br></br>
                        <Field
                            name="duration"
                            type="integer"
                            placeholder="Duration"
                            id="gnerate-trip-input"
                        />
                        <ErrorMessage name="duration" component="span" />
                        <br></br>
                        <label>Price:</label>
                        <br></br>
                        <Field
                            name="price"
                            type="flaot"
                            placeholder="Price"
                            id="gnerate-trip-input"
                        />
                        <ErrorMessage name="price" component="span" />
                        <br></br>
                        <label>Currency:</label>
                        <br></br>
                        <Field
                            name="currency"
                            //type="text"
                            placeholder="Currency"
                            id="gnerate-trip-input"
                        />
                        <ErrorMessage name="currency" component="span" />
                        <br></br>
                        <button type="submit">Generate a Trip</button>
                    </Form>
                </Formik>
            </div>
    
        </div>
    );
}

export default GenerateTrip;