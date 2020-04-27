import React from 'react'
import NavBar from './../components/navbar'

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true,
            token: ''
        }
        this.click = this.click.bind(this)
    }

    componentDidMount(){
        this.setState({
            token: this.props.location.state.token
        })
    }

    click(){
        fetch("http://192.168.0.23:5000/protected?token=" + this.state.token)
            .then(function(res){ return res.json(); })
            .then(function(data){ alert( JSON.stringify( data ) ) })
    }

    render(){
        return(
            <div>
                <header>
                    <NavBar home={true}/>
                </header>
                <h1>Ola! Estou Logado!</h1>
                <button onClick={this.click}>Press ME!</button>
            </div>
        )
    }
}

export default Home