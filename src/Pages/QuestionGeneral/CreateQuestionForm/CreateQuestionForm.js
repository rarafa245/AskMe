import React, { useState } from 'react'
import { AlertCard, SteelButton } from '../../../Components'
import { axiosPostQuestions } from '../../../Services'


function CreateQuestionForm (props) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [message, setMessage] = useState('')
    const [disabledButton, setDisableButton] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)
    

    const handleSubmit = (event) => {

        event.preventDefault()
        setLoadingButton(true)
        setDisableButton(true)
        setMessage( <AlertCard type={'LOADING'} message={'Wait a moment...'} />)
        
        const questionCreateInfos = new FormData(event.target)
        axiosPostQuestions(questionCreateInfos)
            .then(response => {
                if (response.error) {
                    alert('Session Expired! Timeout!')
                    props.history.push("/")
                }
                else {
                    setMessage(<AlertCard   type={response.status} 
                                            message={response.message} />)
                    setLoadingButton(false)
                    setDisableButton(false)

                    if (response.status)
                        window.location.reload()
                }
            })
    }

    return (
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

                    <SteelButton    state={loadingButton} 
                                    disabled={disabledButton}
                                    content={'Create Question'}    />

                </fieldset>
            </form>
            
        </div>
    )
    
}

export default CreateQuestionForm
