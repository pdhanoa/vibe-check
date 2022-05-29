import { addData, useData, setData } from './utilities/firebase.js';
/*
Landing page for calendar / letting user select mood and do metrics
*/
export const Home = (props) => {
    const [data, loading, error] = useData('/');
    if(error) return <h1>{error}</h1>;
    if(loading) return <h1>wait...</h1>;

    let currUser = data["users"][props.username];
    console.log(currUser[0])

    // current status: cannot figure out how to get past the long ID in firebase
    // to extract the metrics

    let metrics = currUser["metrics"];
    let formHTML = `
                <p id="mood-box">
                    How do you feel on a scale of 1-100?:
                </p> 
                <input class="form-control" type="number" name="mood"></input> <br/>
    `;
    // for(let i = 0; i < metrics.length; i++) {
    //     // metrics: steps (number), exercise (boolean), skincare (boolean), sleep (number), water intake (number), other (boolean)
    //     if(metrics[i] === "steps" || metrics[i] === "water" || metrics[i] === "sleep") {
    //         if(metrics[i] === "steps") {
    //             formHTML += `<p id="steps-box">
    //                             How many steps did you take today?
    //                         </p>`;
    //         }
    //         else if(metrics[i] === "water") {
    //             formHTML += `<p id="water-box">
    //                             How many glasses of water did you drink today?
    //                         </p>`;
    //         }
    //         else {
    //             formHTML += `<p id="sleep-box">
    //                             How many hours of sleep did you get last night?
    //                         </p>`;
    //         }
    //         formHTML += `<input class="form-control" type="number" name="mood"></input> <br/>`;
    //     }
    //     else {
    //         if(metrics[i] === "exercise") {
    //             formHTML += `<p id="exercise-box">
    //                             Did you exercise today?
    //                         </p>`
    //         }
    //         else if(metrics[i] === "skincare") {
    //             formHTML += `<p id="skincare-box">
    //                             Did you do your skincare routine today?
    //                         </p>`
    //         }
    //         else {
    //             formHTML += `<p id="custom-box">
    //                             Did you do ${metrics[i]} today?
    //                         </p>`
    //         }
    //         formHTML += `<select name="boolean-${metrics[i]}">
    //                         <option value=${true}>Yes</option>
    //                         <option value=${false}>No</option>
    //                     </select>`;
    //     }
    // }
    

    console.log(currUser);
    console.log(metrics);
    // console.log("steps" in metrics);
    if(props.visibility) {
        return(
            <>
            <p>Welcome, {props.name} ({props.username})!</p>
            <p>Let's log your mood</p>
            <form id="daily-form">
                {/* {("steps" in metrics) ? "yes" : "no"} */}
                <p>{(true) ? "yes" : "no"}</p>
            </form>
            </>

        )
    }
}