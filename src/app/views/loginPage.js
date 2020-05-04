import React from 'react'
import NavBar from './../components/navbar'
import LogginForm from './../components/logginForm'
import InfoCard from './../components/infoCard'


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
                    <NavBar  home={false}/>
                </header>
                <div className="container-fluid">
                    <section className="row justify-content-lg-around">
                        <LogginForm {...this.props}/>
                        <InfoCard  mode={'login'}
                                    title={'Your answers are here!'}
                                    subtitle={'sign in for free'}
                                    message={'Store your questions and answer them. If you need to review such an answer, you can check it out here!'}/>
                    </section>
                </div>
            </div>
        )
    }
}


export default Login