import React from 'react'
import NavBar from './../components/navbar'

class Home extends React.Component{

    render(){
        return(
            <div>
                <header>
                    <NavBar home={true}/>
                </header>
                <h1>Ola! Estou Logado!</h1>
            </div>
        )
    }
}

export default Home