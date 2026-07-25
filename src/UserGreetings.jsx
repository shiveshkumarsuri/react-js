import PropTypes from 'prop-types'

function UserGreetings(props){
    
    const {isLoggedIn=false ,userName="Guest"} = props

    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {userName} !
                            </h2>
    const loginPrompt = <h2 className="login-prompt">
            P               lease Log In to Continue!
                        </h2>
    
    return (isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreetings.proptypes = {
    isLoggedIn : PropTypes.bool,
    userName : PropTypes.string,
}

export default UserGreetings



// function UserGreetings(props){
    
//     if(props.isLoggedIn){
//         return <h2 className="welcome-message">
//             Welcome {props.userName} !</h2>
//     } else{
//         return <h2 className="login-prompt">
//             Please Log In to Continue!</h2>
//     }
// }
// export default UserGreetings