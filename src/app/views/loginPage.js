import React from 'react'
import NavBar from './../components/navbar'
import LogginForm from './../components/logginForm'

class Login extends React.Component{

    render(){
        return(
            <div>
                <header>
                    <NavBar home={false}/>
                </header>
                <LogginForm />
            </div>
        )
    }
}



export default Login