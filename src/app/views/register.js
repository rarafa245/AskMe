import React from 'react'
import NavBar from './../components/navbar'
import RegisterForm from './../components/registerForm'

class Register extends React.Component{

    render(){
        return(
            <div>
                <header>
                    <NavBar home={false}/>
                </header>
                <RegisterForm />
            </div>
        )
    }

    
}

export default Register