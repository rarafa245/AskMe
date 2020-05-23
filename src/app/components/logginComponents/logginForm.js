import React, { useState } from 'react'
import axios from 'axios'
import ProcessInfoCard from '../infoComponents/precessInfoCards'


function LogginForm (props) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [message, setMessage] = useState()
    const [loadingButton, setLoadingButton] = useState(false)
    

    const handleSubmit = (event) => {

        setLoadingButton(true)
        event.preventDefault()
        const logginData = new FormData(event.target)

        axios.post('http://localhost:5000/login', logginData)
            .then(res => {
                if (res.data.status){
                    setLoadingButton(false)
                    setMessage()
                    localStorage.setItem('AWT', res.data.token)
                    localStorage.setItem('UID', res.data.username)
                    props.history.push({
                        pathname: (localStorage.getItem('AWTST') == 'true' ?
                                    localStorage.getItem('LPC') : '/home')
                    })
                } else {
                    setLoadingButton(false)
                    setMessage( <ProcessInfoCard type={'FAILURE'} 
                                    message='Invalid Email or Password !' />
                    )
                }
            })
            .catch(err => {
                setLoadingButton(false)
                setMessage( <ProcessInfoCard type={'FAILURE'} 
                                    message='An Error Has Occurred. Try Again !' />
                    )
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
                        { loadingButton ? (<div className="spinner-border spinner-border-sm mr-2" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>) : ''
                        }
                        Log In
                    </button>
                    
                </fieldset>
            </form>
            
        </div>
    )
}

export default LogginForm
