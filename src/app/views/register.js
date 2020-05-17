import React from 'react'
import NavBar from '../components/logginComponents/navbar'
import RegisterForm from '../components/logginComponents/registerForm'
import IntroduceBar from '../components/logginComponents/introduceBar'


class Register extends React.Component{
    // Register new client Page

    componentDidMount(){
        
        localStorage.setItem('LPC', this.props.location.pathname)
        
    }

    render(){
        return(
            <div>
                <header>
                    <NavBar />
                </header>
                <div className="container-fluid">
                    <div className="row justify-content-lg-around">
                        <RegisterForm />
                        <IntroduceBar />
                    </div>
                </div>
            </div>
        )
    }

    
}

export default Register