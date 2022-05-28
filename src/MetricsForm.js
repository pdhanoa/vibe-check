/*
Form for a user to select / edit which metrics they would like to track.
*/

export const MetricsForm = (props) => {
    return(
        <>
        <p>Select the metrics you would like to track</p>
        <form id="metrics-form">
            <input type="checkbox" name="steps"/>
            <label for="vehicle1">Steps per day</label>
            <br/>
            <input type="checkbox" name="water"/>
            <label for="vehicle1">Water intake</label>
            <br/>
            <input type="checkbox" name="exercise"/>
            <label for="vehicle1">Daily exercise</label>
            <br/>

            <button onClick={() => {props.onSubmit(); props.changePages();}}>Submit</button>
        </form>
        </>
    )
}   