import React from 'react'
import { browserHistory } from 'react-router'

class LogOut extends React.Component {

    componentDidMount(){
        localStorage.setItem('AWTST', 'false')
        browserHistory.push('/')
    }

    render(){
        return(<div></div>)
    }
}

export default LogOut