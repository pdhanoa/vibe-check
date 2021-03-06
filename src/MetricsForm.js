/*
Form for a user to select / edit which metrics they would like to track.
*/

export const MetricsForm = (props) => {
    return(
        <>
        <p>Select the metrics you would like to track</p>
        <form id="metrics-form">
            <input type="checkbox" name="steps"/>
            <label for="steps">Steps per day</label>
            <br/>
            <input type="checkbox" name="water"/>
            <label for="water">Water intake</label>
            <br/>
            <input type="checkbox" name="exercise"/>
            <label for="exercise">Daily exercise</label>
            <br/>
            <input type="checkbox" name="sleep"/>
            <label for="sleep">Sleep hours</label>
            <br/>
            <input type="checkbox" name="skincare"/>
            <label for="skincare">Skincare</label>
            <br/>
            <label>
                <input type="text" name="custom" placeholder="Other"/>
            </label>
            <br/>
            {/* additional custom habits? */}
            <button onClick={props.onSubmit}>Submit</button>
        </form>
        </>
    )
}   