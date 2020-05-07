import React from 'react'
<<<<<<< HEAD
import NavBar from '../components/logginComponents/navbar'
import RegisterForm from '../components/logginComponents/registerForm'
import IntroduceBar from '../components/logginComponents/introduceBar'

=======
import NavBar from './../components/navbar'
import RegisterForm from './../components/registerForm'
import InfoCard from './../components/infoCard'
>>>>>>> origin

class Register extends React.Component{
    // Register new client Page

    render(){
        return(
            <div>
                <header>
                    <NavBar />
                </header>
<<<<<<< HEAD
                <div className="container-fluid">
                    <div className="row justify-content-lg-around">
                        <RegisterForm />
                        <IntroduceBar  mode='register'
                                    title='Come on, Join This Community!'
                                    subtitle='Free for all'
                                    message='You can ask your questions to get answers from other users and store them for future reference'/>
                    </div>
                </div>
=======
                <section className="container-fluid">
                    <div className="row justify-content-lg-around">  
                        <RegisterForm />
                        <InfoCard  mode={'register'}
                                            title={'Come on, Join This Community!'}
                                            subtitle={'Free for all'}
                                            message={'You can ask your questions to get answers from other users and store them for future reference'}/>
                    </div>
                </section>
>>>>>>> origin
            </div>
        )
    }

    
}

export default Register