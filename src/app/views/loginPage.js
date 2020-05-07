import React from 'react'
import NavBar from '../components/logginComponents/navbar'
import LogginForm from '../components/logginComponents/logginForm'
import IntroduceBar from '../components/logginComponents/introduceBar'


class Login extends React.Component{
    /* Login Page. First visitor´s page
        When rendered, it checks whether the return to the page was due to Token expiration. 
        If so, return to the expiration page. 
        If not, clear the stores and start a new authentication
    */

    componentDidMount(){
        
        var awtst = localStorage.getItem('AWTST')
        if (awtst === 'true') {
            var lastPage = localStorage.getItem('LPC')
            localStorage.clear()
            localStorage.setItem('LPC', lastPage)
            localStorage.setItem('AWTST', awtst)
        } 
        else  localStorage.clear()
    }

    render(){
        return(
            <div>
                <header>
                    <NavBar/>
                </header>
                <div className="container-fluid">
                    <div className="row justify-content-lg-around">
                        <LogginForm {...this.props}/>
                        <IntroduceBar mode = 'home'
                                    title={'Your answers are here!'}
                                    subtitle={'sign in for free'}
                                    message={'Store your questions and answer them. If you need to review such an answer, you can check it out here!'}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login