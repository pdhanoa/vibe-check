/*
Component that holds the main content of the app
*/

import { Intro1 } from './Intro1.js';
import { Intro2 } from './Intro2.js';
import { Home } from './Home.js';
import { useState } from 'react';
import { addData, useData, setData } from './utilities/firebase.js';

    /*
    Called with a button push on first intro page (when name is inputted)
    */
    const SecondPage = (props) => {
        let newUser = true;
        const [data, loading, error] = useData('/');
        if(error) return <h1>{error}</h1>;
        if(loading) return <h1>wait...</h1>;
        
        let users = Object.keys(data["users"]);
        console.log(props.username)
        for(let i = 0; i < users.length; i++) {
            if(props.username == users[i]) {
                newUser = false;
            }
        }

        if(props.visibility) {
            // if new user, ask about metrics
            if(newUser) {
                props.setIntro2Visibility(true);
                return(
                    <Intro2 visibility = {true} changeVisibility = {props.introHomeChange} processMetricsForm = {props.processMetricsForm}/>
                );
            }
            // if the user exists, switch to home page (skip page 2)
            else {
                props.setHomeVisibility(true);
                return(
                    <Home visibility = {true} username = {props.username} name = {props.name}/>
                );
            }
        }
    }

export const Body = () => {
    const [intro1Visibility, setIntro1Visibility] = useState(true);
    const [intro2Visibility, setIntro2Visibility] = useState(false);
    const [homeVisibility, setHomeVisibility] = useState(false);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const metrics = []
    const [secondVisibility, setSecondVisibility] = useState(false);

    /*
    Called with a button push on second intro page (when metrics are selected)
    */
    const introHomeChange = () => {
        setIntro2Visibility(false);
        setHomeVisibility(true);
    }

    const introPageChange = () => {
        setSecondVisibility(true);
        setIntro1Visibility(false);
    }

    /*
    Takes the data from the metrics form about what the user checked (wants to track)
    and pushes it to an array (which would be pushed to backend for that user)
    */
    const processMetricsForm = () => {
        const metricsForm = document.getElementById("metrics-form");
        const customMetric = metricsForm.elements["custom"].value;

        const formResults = {
            "steps": metricsForm.elements["steps"].checked,
            "water": metricsForm.elements["water"].checked,
            "exercise": metricsForm.elements["exercise"].checked,
            "sleep": metricsForm.elements["sleep"].checked,
            "skincare": metricsForm.elements["skincare"].checked,
            
            };

        for (const [key, value] of Object.entries(formResults)) {
            if(value) { // if an element is checked in the form
                metrics.push(key)
            }
        }
        if(customMetric) {
            metrics.push(customMetric)
        }
        console.log(metrics)
        addCalendar(metrics)
            .then(() => {
                introHomeChange();
            });
    }

    /*
    Adds a calendar for a new user (if the username is new). Does nothing otherwise
    */
    const addCalendar = async(metrics) => {
        // check if username exists

        const newCalendar = {}
        newCalendar[`${username}`] = {
            "name": name,
            "metrics": metrics,
            "calendar": {},
        };

        try {
            // used to be `/users/${username}`
            addData(`/users`, newCalendar);
        } catch (error) {
            alert(error);
        }
    }
    

    return(
        <>
        <Intro1 visibility = {intro1Visibility} changeVisibility = {introPageChange} setName = {setName} username = {username} setUsername = {setUsername}/>
        <SecondPage visibility = {secondVisibility} setIntro1Visibility = {setIntro1Visibility} setIntro2Visibility = {setIntro2Visibility} setHomeVisibility = {setHomeVisibility} introHomeChange = {introHomeChange} processMetricsForm = {processMetricsForm} username = {username} name = {name}/>
        </>
    )
}