import React, { useState } from 'react'
import axios from 'axios'
import ProcessInfoCard from '../infoComponents/precessInfoCards'
import { ButtonSpinner } from '../infoComponents/loadSpinner'

function RegisterForm() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [passconf, setPassconf] = useState('')
    const [message, setMessage] = useState()
    const [disabledButton, setDisableButton] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)


    const handleSubmit = (event) => {
        
        
        event.preventDefault()

        setMessage(<ProcessInfoCard type={'LOADING'} message={'Wait a moment...'} />)
        setLoadingButton(true)
        setDisableButton(true)


        if ( !(event.target.pass.value == event.target.passconf.value) ) {

            setMessage(<ProcessInfoCard type={'FAILURE'} message={"Password don't match!"} /> )
            setDisableButton(false)
            setLoadingButton(false)
            return
        }

        const registerData = new FormData(event.target)
        axios.post('http://localhost:5000/register', registerData)
            .then(res => {
                if (res.data.status) {
                    setMessage( <ProcessInfoCard type={'SUCCESS'} message={res.data.message} />)
                    setLoadingButton(false)
                    setUsername('')
                    setEmail('')
                    setPass('')
                    setPassconf('')
                    setDisableButton(false)
                }
                else {
                    setMessage( <ProcessInfoCard type={'FAILURE'} message={res.data.message} />)
                    setDisableButton(false)
                    setLoadingButton(false)
                }
            })
            .catch(err => {
                setMessage( <ProcessInfoCard type={'FAILURE'} 
                                    message='An Error Has Occurred. Try Again !' />
                    )
                setDisableButton(false)
                setLoadingButton(false)
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
                                placeholder="Insert an Password" 
                                type="password" 
                                className="form-control mb-3" 
                                aria-describedby="emailHelp" />
                        
                        <label htmlFor="Passconf">Confirm User Password</label>
                        <input id="Passconf"
                                name="passconf"
                                value={passconf}
                                onChange={e => setPassconf(e.target.value)}
                                placeholder="Insert an Password" 
                                type="password" 
                                className="form-control mb-3" 
                                aria-describedby="emailHelp" />
                    </div>

                    <button type="submit"
                            disabled={disabledButton}
                        className="btn bg-steel text-white">
                        { loadingButton ? <ButtonSpinner/> : ''
                        }
                        Register
                    </button>

                </fieldset>
            </form>
        </div>
    )
}

export default RegisterForm
