import React from 'react'
import { LoginNavBar } from './../../Components'
import RegisterForm from './registerForm'
import SideBar from './sideBar'

function RegisterPage() {

    return (
        <div>
            <header>
                <LoginNavBar/>
            </header>
            <div className="container-fluid">
                <div className="row justify-content-lg-around">
                    <RegisterForm />
                    <SideBar />
                </div>
            </div>
        </div>
    )
}

export default RegisterPage