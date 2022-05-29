/*
Component that holds the main content of the app
*/

import Intro1 from './pages/Intro1.js';
import { Intro2 } from './Intro2.js';
// import { Intro1 } from './pages/Intro1.js';
import { Home } from './Home.js';
import { useState } from 'react';
import { addData, useData, setData } from './utilities/firebase.js';
// import Resources from './pages/resources.js';
import  Calendar from './pages/calendar.js';
import Goals from './pages/goals.js';
import Resources from './pages/resources.js'
import Title from './Title.js';

export const Body = () => {
    const [intro1Visibility, setIntro1Visibility] = useState(true);
    const [intro2Visibility, setIntro2Visibility] = useState(false);
    const [homeVisibility, setHomeVisibility] = useState(false);
    const [calendarVisibility, setCalendarVisibility] = useState(false);
    const [resourcesVisibility, setResourcesVisibility] = useState(false);
    const [goalsVisibility, setGoalsVisibility] = useState(false);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const metrics = []
    const [data, loading, error] = useData('/');

    /*
    Called with a button push on first intro page (when name is inputted)
    */
    const introPageChange = () => {
        let newUser = true;
        let users = Object.keys(data["users"]);
        console.log(users);
        console.log(users[0])
        console.log(username)
        for(let i = 0; i < users.length; i++) {
            console.log("hello");
            if(username == users[i]) {
                console.log(username);
                newUser = false;
            }
        }

        // should probably change this so that it checks for if the user exists
        // if the user exists, switch to home page (skip page 2)

        if(newUser) {
            setIntro1Visibility(false);
            setIntro2Visibility(true);
        }
        else {
            setIntro1Visibility(false);
            setHomeVisibility(true);
        }
    }

    /*
    Called with a button push on second intro page (when metrics are selected)
    */
    const introHomeChange = () => {
        setIntro2Visibility(false);
        setHomeVisibility(true);
    }

    const makeCalendarPageVisible = () => {
        let function_list = [setIntro1Visibility, setIntro2Visibility, setHomeVisibility, setGoalsVisibility, setResourcesVisibility]
        function_list.map(func => {
            func(false);
        });
        setCalendarVisibility(true);
    }

    const makeGoalPageVisible = () => {
        let function_list = [setIntro1Visibility, setIntro2Visibility, setHomeVisibility, setCalendarVisibility, setResourcesVisibility]
        function_list.map(func => {
            func(false);
        });
        setGoalsVisibility(true);
    }


    const makeResourcesPageVisible = () => {
        let function_list = [setIntro1Visibility, setIntro2Visibility, setHomeVisibility, setCalendarVisibility, setGoalsVisibility]
        function_list.map(func => {
            func(false);
        });
        setResourcesVisibility(true);
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

        const newCalendar = {
            "name": name,
            "metrics": metrics,
            calendar: {},
        }
        try {
            addData(`/users/${username}`, newCalendar);
        } catch (error) {
            alert(error);
        }
    }
    

    return(
        <>
        <Title />
        <Intro1 visibility = {intro1Visibility} changeVisibility = {introPageChange} setName = {setName} username = {username} setUsername = {setUsername}/>
         <Intro2 visibility = {intro2Visibility} changeVisibility = {introHomeChange} processMetricsForm = {processMetricsForm}/>
        {/* <Calendar visibility = {calendarVisibility} changeVisibility = {makeCalendarPageVisible } processMetricsForm = {processMetricsForm}/>
        <Goals visibility = {goalsVisibility} changeVisibility = { makeGoalPageVisible} processMetricsForm = {processMetricsForm}/>
        <Resources visibility = {resourcesVisibility} changeVisibility = { makeResourcesPageVisible} processMetricsForm = {processMetricsForm}/> */}
        <Home visibility = {homeVisibility} username = {username} name = {name} />
        </>
    )
}