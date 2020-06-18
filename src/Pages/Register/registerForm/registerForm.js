import React, { useState } from 'react'
import { SteelButton, AlertCard } from './../../../Components'
import { axiosRegister } from './../../../Services'

function RegisterForm() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [passconf, setPassconf] = useState('')
    const [disabledButton, setDisableButton] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)
    const [message, setMessage] = useState('')


    const handleSubmit = (event) => {
        
        event.preventDefault()

        setMessage(<AlertCard type={'LOADING'} message={'Wait a moment...'} />)
        setLoadingButton(true)
        setDisableButton(true)


        if ( !(event.target.pass.value == event.target.passconf.value) ) {
            setMessage(<AlertCard type={'FAILURE'} message={"Password don't match!"} /> )
            setDisableButton(false)
            setLoadingButton(false)
            return
        }

        const REGISTERDATA = new FormData(event.target)
        axiosRegister(REGISTERDATA)
            .then(response => {
                setLoadingButton(false)
                setDisableButton(false)
                setUsername('')
                setEmail('')
                setPass('')
                setPassconf('')
                setMessage(<AlertCard type={response.status} message={response.message} />)
            })
    }
    

    return (
        <div className="px-4 col-lg-6">
            <form onSubmit={handleSubmit} className="mt-4">
                <fieldset className="form-group">
                    <legend className="border-bottom mb-4">Create a New Account !</legend>
                    
                    {message}

                    <div className="form-group">
                        <label htmlFor="Username">New Username</label>
                        <input id="Username"
                                name="username"
                                value={username}
                                onChange={ e => setUsername(e.target.value) }
                                placeholder="Insert an Username"
                                type="text" 
                                className="form-control mb-3" 
                                aria-describedby="emailHelp" />

                        <label htmlFor="Email">New Email</label>
                        <input id="Email"
                                name="email"
                                value={email}
                                onChange={ e => setEmail(e.target.value) }
                                placeholder="Insert an Email"
                                type="email" 
                                className="form-control mb-3" 
                                aria-describedby="emailHelp" />
                        
                        <label htmlFor="Pass">User Password</label>
                        <input id="Pass"
                                name="pass"
                                value={pass}
                                onChange={ e => setPass(e.target.value) }
                                placeholder="Insert a Password" 
                                type="password" 
                                className="form-control mb-3" 
                                aria-describedby="emailHelp" />
                        
                        <label htmlFor="Passconf">Confirm User Password</label>
                        <input id="Passconf"
                                name="passconf"
                                value={passconf}
                                onChange={e => setPassconf(e.target.value)}
                                placeholder="Confirm Password" 
                                type="password" 
                                className="form-control mb-3" 
                                aria-describedby="emailHelp" />
                    </div>

                    <SteelButton    state={loadingButton}
                                    disabled={disabledButton}
                                    content={'Register'}/>

                </fieldset>
            </form>
        </div>
    )
}

export default RegisterForm
