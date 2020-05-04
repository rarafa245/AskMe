import React from 'react'

class LogginForm extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            pass: '',
            message: ''
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
            * Check if there´s a last page to return (Token expiration)
            * Save infos in localStorage
            * Redirect Client 
        */

        event.preventDefault()
        const logginData = new FormData(event.target)

        fetch('http://192.168.0.23:5000/login', {
            method: 'POST',
            body: logginData
        })
        .then(res => res.json())
        .then(res => {
            if (res.status){

                localStorage.setItem('AWT', res.token)
                localStorage.setItem('UID', res.username)
                this.props.history.push({
                    pathname: (localStorage.getItem('AWTST') == 'true' ?
                                localStorage.getItem('LPC') : '/home')
                })
            }else{
                this.setState({
                    message: <Message type={'alert alert-danger text-center'} 
                                message='Email ou Senha Invalidos !' />
                })
            }
        })
    }


    render(){
        return(
            <div className="col-lg-6">
                <form onSubmit={this.handleSubmit} className="mt-4">
                    <fieldset className="form-group">
                        <legend className="border-bottom mb-4">Log In</legend>

                        {this.state.message}

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

export default LogginForm
