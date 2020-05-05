import React from 'react'
import NavBar from './../components/navbar'
import RegisterForm from './../components/registerForm'
import InfoCard from './../components/infoCard'

class Register extends React.Component{
    // Register new client Page

    render(){
        return(
            <div>
                <header>
                    <NavBar home={false}/>
                </header>
                <section className="container-fluid">
                    <div className="row justify-content-lg-around">  
                        <RegisterForm />
                        <InfoCard  mode={'register'}
                                            title={'Come on, Join This Community!'}
                                            subtitle={'Free for all'}
                                            message={'You can ask your questions to get answers from other users and store them for future reference'}/>
                    </div>
                </section>
            </div>
        )
    }

    
}

export default Register