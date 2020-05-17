import React, { useEffect } from 'react'
import NavBar from '../components/logginComponents/navbar'
import LogginForm from '../components/logginComponents/logginForm'
import IntroduceBar from '../components/logginComponents/introduceBar'


function Login(props) {

    useEffect(() => {
        var awtst = localStorage.getItem('AWTST')
        var lastPage = localStorage.getItem('LPC')
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

    return(
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="container-fluid">
                <div className="row justify-content-lg-around">
                    <LogginForm {...props}/>
                    <IntroduceBar />
                </div>
            </div>
        </div>
    )
    
}


export default Login