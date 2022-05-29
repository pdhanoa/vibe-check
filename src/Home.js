import { addData, useData, setData } from './utilities/firebase.js';

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
    console.log(metrics);
    console.log(metrics.includes("steps"));

    // getting custom index and boolean for if they entered a custom value
    let customVal = false;
    let customIndex = -1;
    for(let i = 0; i < metrics.length; i++) {
        if(metrics[i] !== "skincare" && metrics[i] !== "exercise" && metrics[i] !== "steps" && metrics[i] !== "water" && metrics[i] !== "sleep") {
            customVal = true;
            customIndex = i;
        }
    }
    
    // console.log("steps" in metrics);
    if(props.visibility) {
        return(
            <>
            <p>Welcome, {props.name} ({props.username})!</p>
            <p>Let's log your mood</p>
            <form id="daily-form">
                <p id="mood-box">How do you feel on a scale of 1-100?:</p> 
                <input class="form-control" type="number" name="mood"></input><br/>
                {(metrics.includes("steps")) ? <><p id="steps-box">
                                                    How many steps did you take today?
                                                </p>
                                                <input class="form-control" type="number" name="steps"></input> <br/></> : ``}
                {(metrics.includes("sleep")) ? <><p id="sleep-box">
                                                    How many hours of sleep did you get last night?
                                                </p>
                                                <input class="form-control" type="number" name="sleep"></input> <br/></> : ``}
                {(metrics.includes("water")) ? <><p id="water-box">
                                                    How many glasses of water did you drink today?
                                                </p>
                                                <input class="form-control" type="number" name="water"></input> <br/></> : ``}
                {(metrics.includes("exercise")) ? <><p id="exercise-box">
                                                    Did you exercise today?
                                                </p>
                                                <select name="exercise">
                                                    <option value={true}>Yes</option>
                                                    <option value={false}>No</option>
                                                </select> <br/></> : ``}
                {(metrics.includes("skincare")) ? <><p id="skincare-box">
                                                    Did you do your skincare routine today?
                                                </p>
                                                <select name="skincare">
                                                    <option value={true}>Yes</option>
                                                    <option value={false}>No</option>
                                                </select> <br/></> : ``}
                {(customVal) ? <><p id="custom-box">
                                                    Did you do "{metrics[customIndex]}" today?
                                                </p>
                                                <select name="custom">
                                                    <option value={true}>Yes</option>
                                                    <option value={false}>No</option>
                                                </select> <br/></> : ``}
                <button onClick={() => {}}>Submit</button>
            </form>
            </>

        )
    }
}