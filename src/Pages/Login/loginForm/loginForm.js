import React, { useState } from 'react'
import { SteelButton, AlertCard } from './../../../Components'
import { axiosLogin } from './../../../Services'


function LoginForm (props) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [message, setMessage] = useState()
    const [loadingButton, setLoadingButton] = useState(false)
    

    const handleSubmit = (event) => {

        event.preventDefault()
        setLoadingButton(true)
        const LOGINDATA = new FormData(event.target)

        axiosLogin(LOGINDATA)
            .then(response => {
                if (response.status) {
                    setLoadingButton(false)
                    localStorage.setItem('AWT', response.AWT)
                    localStorage.setItem('UID', response.UID)
                    props.history.push({
                        pathname: (localStorage.getItem('AWTST') == 'true' ?
                                    localStorage.getItem('LPC') : '/home')
                    })
                }
                else {
                    setLoadingButton(false)
                    let errorInfo = (response.error)    ? 'An Error Has Occurred. Try Again !'
                                                        : 'Invalid Email or Password !'

                    setMessage( <AlertCard  type={'FAILURE'} 
                                            message={errorInfo} />
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

                    <SteelButton    state={loadingButton}
                                    disable={false}
                                    content={'Log In'}/>
                    
                </fieldset>
            </form>
            
        </div>
    )
}

export default LoginForm
