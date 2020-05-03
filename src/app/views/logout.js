import React from 'react'
import { browserHistory } from 'react-router'

class LogOut extends React.Component {
    /*  Class for client Log Out
        Set some configurations for client to log out
        With sucess
    */

    componentDidMount(){
        localStorage.setItem('AWTST', 'false')
        browserHistory.push('/')
    }

    render(){
        return(<div></div>)
    }
}

export default LogOut