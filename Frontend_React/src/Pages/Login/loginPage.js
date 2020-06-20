import React, { useEffect } from 'react'
import { LoginNavBar } from './../../Components'
import LoginForm from './loginForm'
import SideBar from './sideBar'

function LoginPage(props) {

    useEffect(() => {
        const awtst = localStorage.getItem('AWTST')
        const lastPage = localStorage.getItem('LPC')
        if (awtst === 'true') {
            localStorage.clear()
            localStorage.setItem('LPC', lastPage)
            localStorage.setItem('AWTST', awtst)
        } 
        else {
            localStorage.clear()
            localStorage.setItem('LPC', props.location.pathname)
            localStorage.setItem('AWTST', 'false')
        } 
    }, [])
    
    return (
        <div>
            <header>
                <LoginNavBar/>
            </header>
            <div className="container-fluid">
                <div className="row justify-content-lg-around">
                    <LoginForm {...props}/>
                    <SideBar />
                </div>
            </div>
        </div>
    )
}

export default LoginPage