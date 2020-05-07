import React from 'react'
import NavBar from '../components/logginComponents/navbar'
import RegisterForm from '../components/logginComponents/registerForm'
import IntroduceBar from '../components/logginComponents/introduceBar'


class Register extends React.Component{
    // Register new client Page

    render(){
        return(
            <div>
                <header>
                    <NavBar />
                </header>
                <div className="container-fluid">
                    <div className="row justify-content-lg-around">
                        <RegisterForm />
                        <IntroduceBar  mode='register'
                                    title='Come on, Join This Community!'
                                    subtitle='Free for all'
                                    message='You can ask your questions to get answers from other users and store them for future reference'/>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default Register