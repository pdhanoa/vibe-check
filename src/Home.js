
/*
Comment
*/
export const Home = (props) => {
    if(props.visibility) {
        return(
            <p>Welcome, {props.name} ({props.username})!</p>
        )
    }
}