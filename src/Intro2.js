/*
Second page for new users to select metrics they would like to track.
*/

import { MetricsForm } from './MetricsForm.js';

export const Intro2 = (props) => {
    if(props.visibility) {
        return(
            <>
                <MetricsForm onSubmit = {props.processMetricsForm} changePages = {props.changeVisibility}/>
            </>
        )
    }
}