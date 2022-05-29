export const DailyForm = (props) => {

    // getting custom index and boolean for if they entered a custom value
    // so that we can put it in the daily form
    if(props.metrics) {
        for(let i = 0; i < props.metrics.length; i++) {
            if(props.metrics[i] !== "skincare" && props.metrics[i] !== "exercise" && props.metrics[i] !== "steps" && props.metrics[i] !== "water" && props.metrics[i] !== "sleep") {
                props.setCustomVal(true);
                props.setCustomIndex(i);
            }
        } // something about e.preventDefault
             // change the text here lol the form is the important part
            // used ternary operators to make a form based on the user-chosen metrics
            // steps, water, and sleep are number values
            // exercise, skincare, and custom are boolean values
            // TO-DO: submit function!!! it's empty lol
            // submit should push a calendar for some date to Firebase for that user
            return(
                <>
                <p>Welcome, {props.name} ({props.username})!</p>
                <p>Let's log your mood</p>
                <form id="daily-form">
                    <p id="mood-box">How do you feel on a scale of 1-100?:</p> 
                    <input class="form-control" type="number" name="mood"></input><br/>
                    {(props.metrics.includes("steps")) ? <><p id="steps-box">
                                                        How many steps did you take today?
                                                    </p>
                                                    <input class="form-control" type="number" name="steps"></input> <br/></> : ``}
                    {(props.metrics.includes("sleep")) ? <><p id="sleep-box">
                                                        How many hours of sleep did you get last night?
                                                    </p>
                                                    <input class="form-control" type="number" name="sleep"></input> <br/></> : ``}
                    {(props.metrics.includes("water")) ? <><p id="water-box">
                                                        How many glasses of water did you drink today?
                                                    </p>
                                                    <input class="form-control" type="number" name="water"></input> <br/></> : ``}
                    {(props.metrics.includes("exercise")) ? <><p id="exercise-box">
                                                        Did you exercise today?
                                                    </p>
                                                    <select name="exercise">
                                                        <option value={true}>Yes</option>
                                                        <option value={false}>No</option>
                                                    </select> <br/></> : ``}
                    {(props.metrics.includes("skincare")) ? <><p id="skincare-box">
                                                        Did you do your skincare routine today?
                                                    </p>
                                                    <select name="skincare">
                                                        <option value={true}>Yes</option>
                                                        <option value={false}>No</option>
                                                    </select> <br/></> : ``}
                    {(props.customVal) ? <><p id="custom-box">
                                                        Did you do "{props.metrics[props.customIndex]}" today?
                                                    </p>
                                                    <select name="custom">
                                                        <option value={true}>Yes</option>
                                                        <option value={false}>No</option>
                                                    </select> <br/></> : ``}
                    <button onClick={props.addCalendarDay}>Submit</button>
                </form>
                </>
            )
    }
    else {
            return(
                <>
                <p>Welcome, {props.name} ({props.username})!</p>
                <p>Let's log your mood</p>
                <form id="daily-form">
                    <p id="mood-box">How do you feel on a scale of 1-100?:</p> 
                    <input class="form-control" type="number" name="mood"></input><br/>
                    <button onClick={props.addCalendarDay}>Submit</button>
                </form>
                </>
                )
    }
}