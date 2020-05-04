import React from 'react'
import NavBar from './../components/navbar'
import {useHistory} from 'react-router-dom'

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true,
            isLogged: false,
        }
        this.click = this.click.bind(this)
    }

    componentDidMount(){
        
        localStorage.setItem('LPC', this.props.location.pathname)
        localStorage.setItem('AWTST', 'true')
        this.setState({ isLogged: true }) 
    }

    click(){
        fetch("http://192.168.0.23:5000/protected", {
            method: 'GET',
            headers: new Headers({
                'Authorization': localStorage.getItem('AWT'), 
                'UID': localStorage.getItem('UID')
              })
        })
        .then((res) => res.json())
        .then(res => {
            if (res.status) {
                localStorage.setItem('AWT', res.token)
                alert(res.message)
            }
            else {
                console.log(res.message)
                alert('Session Expired! Enter Again')
                useHistory.push('/')
            }
        })
    }

    render(){
        if (this.state.isLogged){
            return(
                <div>
                    <header>
                        <NavBar home={true}/>
                    </header>
                    <h1>Ola! Estou Logado!</h1>
                    <button onClick={this.click}>Press ME!</button>
                </div>
            )
        }else{
            

            return(
                <div className="mt-4">
                    <h1>Login Error 321</h1>
                    <br />
                    <p className="text-center text-sm-left ">You do not have permission to view this page using the credentials that you supplied</p>
                    <p className="text-center text-sm-left">Sorry for what happened, return to the previous page and try to redo the process</p>
                </div>
            )
        }
       
    }
}

export default Home