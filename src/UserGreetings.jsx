
function UserGreetings(props){
    if(props.isLoggedIn){
        return <h2 className="welcome-message">
            Welcome {props.userName} !</h2>
    } else{
        return <h2 className="login-prompt">
            Please Log In to Continue!</h2>
    }
}
export default UserGreetings