/*
First page where user is required to enter username and name.
*/

import { useEffect } from "react";

export const Intro1 = (props) => {
    // useEffect(() => {
    //     props.changeVisibility();
    // }, [props.username])

    const onSubmit = () => {
        const nameForm = document.getElementById("name-form");
        let user = nameForm.elements["username"].value;
        let name = nameForm.elements["name"].value;
        // weird behavior with url
        if(!user) {
            alert("Please enter username.")
        }
        else if(!name) {
            alert("Please enter name.")
        }
        else {
            props.setName(name); 
            props.setUsername(user);
            props.changeVisibility();
        }
    }

    if(props.visibility) {
        return(
            <>
            <form id="name-form">
                <p class="name" id="username-box">
                    Enter your username:
                </p> 
                <input type="text" name="username"></input>

                <p class="name">
                    What's your name?
                </p>
                <input type="text" name="name"></input>
                <button onClick={onSubmit}>Next:</button>
            </form>
            </>
        )
    }
}