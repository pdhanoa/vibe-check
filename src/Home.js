import { addData, useData, setData } from './utilities/firebase.js';
import { DailyForm } from './components/DailyForm.js';
import { useState } from 'react';

/*
This turns the firebase data into a dictionary that circumvents the stupid gibberish IDs
*/
export const dictToList = (dict) =>{
    let arr = [];
    Object.keys(dict).forEach(key => 
      arr.push(dict[key]))  
    return arr;
}

/*
Landing page for calendar / letting user select mood and do metrics
*/
export const Home = (props) => {
    const [data, loading, error] = useData('/');
    const [customVal, setCustomVal] = useState(false);
    const [customIndex, setCustomIndex] = useState(-1);

    if(error) return <h1>{error}</h1>;
    if(loading) return <h1>wait...</h1>;

    let dataDict = dictToList(data["users"]);

    let currUser = ""; // should be the object that is the current user
    for(let i = 0; i < dataDict.length; i++) {
        if(props.username === Object.keys(dataDict[i])[0]) {
            currUser = dataDict[i]; // holds current user object
        }
    }
    let metrics = currUser[props.username]["metrics"];

    const addCalendarDay = () => {
        if(!metrics) {
            // handling if there are no metrics
        }
        else {
            const dailyForm = document.getElementById("daily-form");
            const mood = dailyForm.elements["mood"].value;
            console.log(dailyForm);
            // let dailyMetrics = [];
            // if(dailyForm.elements["steps"]) {
            //     dailyMetrics.push(dailyForm.elements["steps"].value);
            // }
            // if(dailyForm.elements["sleep"]) {
            //     dailyMetrics["steps"] = dailyForm.elements["steps"].value;
            // }
            // if(dailyForm.elements["water"]) {
            //     dailyMetrics["water"] = dailyForm.elements["water"].value;
            // }
            // if(dailyForm.elements["exercise"]) {
            //     dailyMetrics["exercise"] = dailyForm.elements["exercise"].value;
            // }
            // if(dailyForm.elements["skincare"]) {
            //     dailyMetrics["skincare"] = dailyForm.elements["skincare"].value;
            // }
            // if(dailyForm.elements["custom"]) {
            //     dailyMetrics[metrics[customIndex]] = dailyForm.elements["custom"].value;
            // }
            // console.log(mood);
            // console.log(dailyMetrics);
        }
    }

    if(props.visibility) {
        // change the text here lol the form is the important part
        // used ternary operators to make a form based on the user-chosen metrics
        // steps, water, and sleep are number values
        // exercise, skincare, and custom are boolean values
        // TO-DO: submit function!!! it's empty lol
        // submit should push a calendar for some date to Firebase for that user
        return(
            <DailyForm metrics = {metrics} name = {props.name} username = {props.username} addCalendarDay = {addCalendarDay} customVal = {customVal} customIndex = {customIndex} setCustomVal = {setCustomVal} setCustomIndex={setCustomIndex}/>
            )
        }  
}