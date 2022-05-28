

export const Intro1 = (props) => {
    if(props.visibility) {
        return(
            <>
            <form action="intro2.js" method="POST">
                <p class="name" id="username-box">
                    Enter your username:
                </p> 
                <input type="text"></input>

                <p class="name">
                    What's your name?
                </p>
                <input type="text"></input>
                <button  onClick={props.changeVisibility}>Next:</button>
            </form>
            </>
        )
    }
}