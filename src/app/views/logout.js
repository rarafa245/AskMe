import React from 'react'

class LogOut extends React.Component {
    /*  Class for client Log Out
        Set some configurations for client to log out
        With sucess
    */

    componentDidMount(){
        localStorage.setItem('AWTST', 'false')
        this.props.history.push('/')
        console.log(this.props.location.pathname)
    }

    render(){
        return(<div></div>)
    }
}

export default LogOut