import React from 'react'
import NavBar from './../components/navbar'

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true,
            isLogged: false,
            token: ''
        }
        this.click = this.click.bind(this)
    }

    componentDidMount(){
        try {
            this.setState({
                token: this.props.location.state.token,
                isLogged: true
            })
         }
         catch (e) {
           console.log(e)
        } 
    }

    click(){
        fetch("http://192.168.0.23:5000/protected?token=" + this.state.token)
            .then(function(res){ return res.json(); })
            .then(function(data){ alert( JSON.stringify( data ) ) })
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