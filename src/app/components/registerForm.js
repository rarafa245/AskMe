import React from 'react'
import {browserHistory, Link} from 'react-router'

class RegisterForm extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            email: '',
            pass: '',
            passconf: '',
            message: '',
            disabledButton: false
        }

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        
        this.setState({
            message: <Message type={'alert alert-dark text-center'} 
                                message={'Wait a moment...'} />,
            disabledButton: true
        })

        event.preventDefault()

        if ( !(event.target.pass.value == event.target.passconf.value) ) {

            this.setState({
                message: <Message type={'alert alert-danger text-center'} 
                            message={"Password don't match!"} />
            })

            return
        }


        const logginData = new FormData(event.target)

        fetch('http://192.168.0.23:5000/register', {
            method: 'POST',
            body: logginData
        })
        .then(res => res.json())
        .then(res => {
            if (res.status) {
                this.setState({
                    message: <Message type={'alert alert-info text-center'} 
                                message={res.message} />,
                    username: '',
                    email: '',
                    pass: '',
                    passconf: '',
                    disabledButton: false
                })
            }
            else {
                this.setState({
                    message: <Message type={'alert alert-danger text-center'} 
                                message={res.message} />,
                    disabledButton: false
                })
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
                                <legend className="border-bottom mb-4">Create a New Account !</legend>
                                
                                {this.state.message}

                                <div className="form-group">
                                    <label htmlFor="Username">New Username</label>
                                    <input id="Username"
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                            placeholder="Insert an Username"
                                            type="text" 
                                            className="form-control mb-3" 
                                            aria-describedby="emailHelp" />

                                    <label htmlFor="Email">New Email</label>
                                    <input id="Email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            placeholder="Insert an Email"
                                            type="email" 
                                            className="form-control mb-3" 
                                            aria-describedby="emailHelp" />
                                    
                                    <label htmlFor="Pass">User Password</label>
                                    <input id="Pass"
                                            name="pass"
                                            onChange={this.handleChange}
                                            value={this.state.pass}
                                            placeholder="Insert an Password" 
                                            type="password" 
                                            className="form-control mb-3" 
                                            aria-describedby="emailHelp" />
                                    
                                    <label htmlFor="Passconf">Confirm User Password</label>
                                    <input id="Passconf"
                                            name="passconf"
                                            onChange={this.handleChange}
                                            value={this.state.passconf}
                                            placeholder="Insert an Password" 
                                            type="password" 
                                            className="form-control mb-3" 
                                            aria-describedby="emailHelp" />
                                </div>

                                <button type="submit"
                                        disabled={this.state.disabledButton}
                                    className="btn bg-steel text-white">
                                    Register
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
                <h5 className="card-title text-center">Come on, Join This Community!</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">free for all</h6>
                <p className="card-text text-center">
                    You can ask your questions to get answers from other users and store them for future reference
                </p>
                <ul className="list-group">
                    <li className="list-group-item text-center text-lg-left">
                        <Link href="/">Return</Link>
                    </li>
                    <li className="list-group-item text-center text-lg-left">
                        <a href="#">Forgot Account?</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function Message(props) {
    
    return(
        <div className={props.type} role="alert">
            {props.message}
        </div>
    )
    
}


export default RegisterForm
