/*
Component that holds the main content of the app
*/

import { Intro1 } from './Intro1.js';
import { Intro2 } from './Intro2.js';
import { Home } from './Home.js';
import { useState } from 'react';

export const Body = () => {
    const [intro1Visibility, setIntro1Visibility] = useState(true);
    const [intro2Visibility, setIntro2Visibility] = useState(false);
    const [homeVisibility, setHomeVisibility] = useState(false);

    /*
    Called with a button push on first intro page (when name is inputted)
    */
    const introPageChange = () => {
        setIntro1Visibility(false);
        setIntro2Visibility(true);
    }

    /*
    Called with a button push on second intro page (when metrics are selected)
    */
    const introHomeChange = () => {
        setIntro2Visibility(false);
        setHomeVisibility(true);
    }

    /*
    Takes the data from the metrics form about what the user checked (wants to track)
    and pushes it to an array (which would be pushed to backend for that user)
    */
    const processMetricsForm = () => {
        const metricsForm = document.getElementById("metrics-form");
        console.log(metricsForm)
        const formResults = {
            "steps": metricsForm.elements["steps"].value,

            };
        console.log(formResults["steps"])
        console.log("yay! you did it!")
    }
    

    return(
        <>
        <p>welcome</p>
        <Intro1 visibility = {intro1Visibility} changeVisibility = {introPageChange}/>
        <Intro2 visibility = {intro2Visibility} changeVisibility = {introHomeChange} processMetricsForm = {processMetricsForm}/>
        <Home visibility = {homeVisibility} />
        </>
    )
}