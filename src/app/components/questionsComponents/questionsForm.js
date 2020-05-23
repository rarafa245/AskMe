import React, { useState } from 'react'
import axios from 'axios'
import ProcessInfoCard from '../infoComponents/processInfoCards'
import { ButtonSpinner } from '../infoComponents/loadSpinner'


function QuestionsForm () {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [message, setMessage] = useState('')
    const [disabledButton, setDisableButton] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)
    

    const handleSubmit = (event) => {

        event.preventDefault()
        setLoadingButton(true)
        setMessage( <ProcessInfoCard type={'LOADING'} message={'Wait a moment...'} />)
        setDisableButton(true)

        const questionData = new FormData(event.target)

        axios.post('http://localhost:5000/regQuestion', questionData , {
            headers: {
                'Authorization': localStorage.getItem('AWT'),
                'UID': localStorage.getItem('UID')
            }
        })
        .then(res => {
            if (res.data.status) {
                setMessage( <ProcessInfoCard type={'SUCCESS'} message={res.data.message} /> )
                setLoadingButton(false)
                setDisableButton(false)
            }
            else {
                setMessage( <ProcessInfoCard type={'FAILURE'} message={res.data.message} /> )
                setLoadingButton(false)
                setDisableButton(false)
            }
        })
        .catch(err => {
                setMessage( <ProcessInfoCard type={'FAILURE'} 
                                             message='An Error Has Occurred. Try Again !' />)
                setLoadingButton(false)
                setDisableButton(false)
            })
    }

    return(
        <div className="col-12">

            <form onSubmit={handleSubmit}>
                <fieldset className="form-group">
                    <legend className="border-bottom text-center text-md-left mb-4">New Question?</legend>

                    {message}

                    <div className="form-group">
                        <label htmlFor="Title"><h6>Question Title</h6></label>
                        <input id="Title"
                                name="title"
                                value={title}
                                onChange={ e => setTitle(e.target.value) }
                                type="text" 
                                className="form-control mb-2" />
                        
                        <label htmlFor="Content"><h6>Whats Your Question?</h6></label>
                        <textarea id="Content"
                                name="content"
                                rows="5" 
                                cols="50"
                                value={content} 
                                onChange={ e => setContent(e.target.value) }
                                className="form-control" />
                    </div>

                    <button type="submit" 
                            disabled={disabledButton}
                            className="btn bg-steel text-white">
                        { loadingButton ? <ButtonSpinner/> : ''}
                        Submit
                    </button>

                </fieldset>
            </form>
            
        </div>
    )
    
}

export default QuestionsForm
