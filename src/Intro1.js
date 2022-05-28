

export const Intro1 = (props) => {
    if(props.visibility) {
        return(
            <>
            <p>hi</p>
            <button onClick={props.changeVisibility}>change pages</button>
            </>
        )
    }
}