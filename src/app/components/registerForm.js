import React from 'react'
import {Link} from 'react-router-dom'

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
        // Change Input Callback - Change the value of the form inputs

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        /* Submit Callback - Send values to Server
            * Informs the customer about the requisition 
            * Checks whether the data meets the requirements
            * Send the datas
            * Return the information of Success or Failuer of process
        */
        
        event.preventDefault()
        
        // Changes status while not receiving storage confirmation
        // Information processing alert
        this.setState({
            message: <Message type={'alert alert-dark text-center'} 
                                message={'Wait a moment...'} />,
            disabledButton: true
        })

        
        // Changing the state if password not confirmed
        // Information processing alert
        // Return and stop the callback 
        if ( !(event.target.pass.value == event.target.passconf.value) ) {
            this.setState({
                message: <Message type={'alert alert-danger text-center'} 
                            message={"Password don't match!"} />,
                disabledButton: false
            })

            return
        }


        // Get the  information from form and post it
        // Send an confrm or failure message
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
            <div className="col-lg-6">
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
                            className="bg-steel text-white">
                            Register
                        </button>
                    </fieldset>
                </form>
            </div>
        )
    }
}



function Message(props) {
    /* Success or Falue alert
        :parram - type: Type of the message
                message: Info message
    */
    
    return(
        <div className={props.type} role="alert">
            {props.message}
        </div>
    )
    
}


export default RegisterForm
