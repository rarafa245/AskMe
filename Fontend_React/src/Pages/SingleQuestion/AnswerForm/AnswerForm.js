import React, { useState } from 'react'
import { SteelButton, AlertCard } from '../../../Components'
import { axiosRegisterAnswer } from '../../../Services'

function AnswarForm (props) {

    const [content, setContent] = useState('')
    const [message, setMessage] = useState('')
    const [disabledButton, setDisableButton] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (event) => {

        if (!localStorage.getItem('AWT'))
            props.history.push("/")

        event.preventDefault()
        setLoading(true)
        setDisableButton(true)
        setMessage(<AlertCard   type={'LOADING'} 
                                message={'Wait a moment...'}/>)

        const answerInfos = new FormData(event.target)
        answerInfos.append('username', localStorage.getItem('UID'))
        answerInfos.append('id_question', props.questionId)

        axiosRegisterAnswer(answerInfos)
            .then((response) => {
                setMessage(<AlertCard   type={response.status} 
                                        message={response.message}/>)
                if (response.status)
                    window.location.reload()
                
                setLoading(false)
                setDisableButton(false)
            })
    }

    return (
        <div className="mt-3 mb-5 col-12">
            <form onSubmit={handleSubmit}>
                <fieldset>
                <legend className="border-bottom text-center text-md-left mb-2">
                    Send An Answer
                </legend>

                    {message}

                    <div className="form-group">
                        <label htmlFor="Content"><h6>New Answer</h6></label>
                        <textarea id="Content"
                                name="content"
                                rows="5" 
                                cols="50"
                                value={content} 
                                onChange={ e => setContent(e.target.value) }
                                className="form-control" />
                    </div>

                    <SteelButton    state={loading}
                                    disabled={disabledButton}
                                    content={'Register'}/>

                </fieldset>
            </form>
        </div>
    )
}

export default AnswarForm