import React from 'react'
import NavBar from '../components/logginComponents/navbar'
import LogginForm from '../components/logginComponents/logginForm'
import IntroduceBar from '../components/logginComponents/introduceBar'


class Login extends React.Component{
    /* Login Page. First visitor´s page
        When rendered, it checks whether the return to the page was due to Token expiration. 
        If so, return to the expiration page. 
        If not, clear the stores and start a new authentication
    */

    componentDidMount(){
        
        var awtst = localStorage.getItem('AWTST')
        if (awtst === 'true') {
            localStorage.clear()
            localStorage.setItem('LPC', localStorage.getItem('LPC'))
            localStorage.setItem('AWTST', awtst)
        } 
        else {
            localStorage.clear()
            localStorage.setItem('LPC', this.props.location.pathname)
        } 
    }

    render(){
        return(
            <div>
                <header>
                    <NavBar/>
                </header>
                <div className="container-fluid">
                    <div className="row justify-content-lg-around">
                        <LogginForm {...this.props}/>
                        <IntroduceBar />
                    </div>
                </div>
            </div>
        )
    }
}


export default Login