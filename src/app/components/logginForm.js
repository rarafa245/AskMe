import React from 'react'
import {browserHistory} from 'react-router'

class LogginForm extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            pass: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const logginData = new FormData(event.target)

        fetch('http://192.168.0.23:5000/login', {
            method: 'POST',
            body: logginData
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.status){
                return browserHistory.push({
                    pathname: '/home', 
                    state: {token: res.token}
                })
            }else{
                console.log('Nao Está logado')
            }
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row justify-content-lg-around">
                    <div className="content-section col-lg-6">
                        <form onSubmit={this.handleSubmit} className="mt-4">
                            <fieldset className="form-group">
                                <legend className="border-bottom mb-4">Log In</legend>

                                <div className="form-group">
                                    <label htmlFor="Email">Email address</label>
                                    <input id="Email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            type="email" 
                                            className="form-control mb-2" 
                                            aria-describedby="emailHelp" />
                                    
                                    <label htmlFor="Pass">Password</label>
                                    <input id="Pass"
                                            name="pass"
                                            onChange={this.handleChange}
                                            value={this.state.pass} 
                                            type="password" 
                                            className="form-control" 
                                            aria-describedby="emailHelp" />
                                </div>

                                <button type="submit" 
                                    className="btn bg-steel text-white">
                                    Log In
                                </button>
                            </fieldset>
                        </form>
                    </div>
                    <div className="mt-lg-5 col-lg-4">
                        <Info />
                    </div>
                </div>
            </div>
        )
    }
}


function Info(){
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center">Your answers are here!</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">sign in for free</h6>
                <p className="card-text text-center">
                    Store your questions and answer them. If you need to review such an answer, you can check it out here!
                </p>
                <ul className="list-group">
                    <li className="list-group-item text-center text-lg-left">
                        <a href="#">Create a New Account</a>
                    </li>
                    <li className="list-group-item text-center text-lg-left">
                        <a href="#">Forgot Account?</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LogginForm
