import React from 'react'
import PropTypes from 'prop-types'
function UserGreeting(props) {

    return(
        // Ternaire operator
        props.isLoggedIn ? <h2 className='welcome-msg'>welcome {props.username}</h2>:
        <h2 className='log-prompt'>Please log in for continue</h2>
    ) 
}

UserGreeting.Proptypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"guest"
}

export default UserGreeting