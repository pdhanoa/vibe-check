/*
Comment
*/

export const Intro2 = (props) => {
    if(props.visibility) {
        return(
            <>
            <p>hi2</p>
            <button onClick={props.changeVisibility}>change pages</button>
            </>
        )
    }
}