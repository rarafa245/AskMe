import React, { useEffect } from 'react'
import NavBar from '../components/logginComponents/navbar'
import RegisterForm from '../components/logginComponents/registerForm'
import IntroduceBar from '../components/logginComponents/introduceBar'


function Register (props) {

    useEffect(() => {
        localStorage.setItem('LPC', props.location.pathname) 
        localStorage.setItem('AWTST', 'false')
    }, [])

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

export default Register