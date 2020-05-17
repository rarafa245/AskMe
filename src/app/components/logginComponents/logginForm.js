import React, { useState } from 'react'
import {Link} from 'react-router-dom'


function LogginForm (props){
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [message, setMessage] = useState()
    

    const handleSubmit = (event) => {

        event.preventDefault()
        const logginData = new FormData(event.target)

        fetch('http://192.168.0.23:5000/login', {
            method: 'POST',
            body: logginData
        })
        .then(res => res.json())
        .then(res => {
            if (res.status){
                setMessage()
                localStorage.setItem('AWT', res.token)
                localStorage.setItem('UID', res.username)
                props.history.push({
                    pathname: (localStorage.getItem('AWTST') == 'true' ?
                                localStorage.getItem('LPC') : '/home')
                })
            } else {
                setMessage( <Message type={'alert alert-danger text-center'} 
                                message='Email ou Senha Invalidos !' />
                )
            }
        })
    }


    return (
        <div className="px-4 col-lg-6">

            <form onSubmit={ handleSubmit} className="mt-4">
                <fieldset className="form-group">
                    <legend className="border-bottom mb-4">Log In</legend>

                        {message}

                    <div className="form-group">
                        <label htmlFor="Email">Email address</label>
                        <input id="Email"
                                name="email"
                                value={email}
                                onChange={ e => setEmail(e.target.value) }
                                type="email" 
                                className="form-control mb-2" 
                                aria-describedby="emailHelp" />
                        
                        <label htmlFor="Pass">Password</label>
                        <input id="Pass"
                                name="pass"
                                value={pass} 
                                onChange= { e => setPass(e.target.value) }
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

function Message(props) {

    return(
        <div className={props.type} role="alert">
            {props.message}
        </div>
    )
}

export default LogginForm
