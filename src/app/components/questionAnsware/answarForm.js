import React, { useState } from 'react'
import axios from 'axios'
import ProcessInfoCard from '../infoComponents/processInfoCards'
import { ButtonSpinner } from '../infoComponents/loadSpinner'

function AnswarForm (props) {

    const [content, setContent] = useState('')
    const [message, setMessage] = useState('')
    const [disabledButton, setDisableButton] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)
    

    const handleSubmit = (event) => {

        event.preventDefault()
        setLoadingButton(true)
        setMessage( <ProcessInfoCard type={'LOADING'} message={'Wait a moment...'} />)
        setDisableButton(true)

        const answerInfos = new FormData(event.target)
        answerInfos.append('username', localStorage.getItem('UID'))
        answerInfos.append('id_question', props.id_question)

        axios.post('http://192.168.0.23:5000/postAnswer', answerInfos, {
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
                window.location.reload()
            }
            else {
                setMessage( <ProcessInfoCard type={'FAILURE'} message={res.data.message} /> )
                setLoadingButton(false)
                setDisableButton(false)
            }
        })
        .catch(err => {
                //Arrumar isso
                setLoadingButton(false)
                setDisableButton(false)
                console.log(err)
        })
        
    }

    return (
        <div className="mt-3">
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

export default AnswarForm