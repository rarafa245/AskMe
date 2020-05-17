import React, { useState } from 'react'


function QuestionsForm () {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [message, setMessage] = useState('')
    const [disabledButton, setDisableButton] = useState(false)
    

    const handleSubmit = (event) => {

        event.preventDefault()
        setMessage( <Message type={'alert alert-dark text-center'} message={'Wait a moment...'} />)
        setDisableButton(true)

        const questionData = new FormData(event.target)

        fetch('http://192.168.0.23:5000/regQuestion', {
            method: 'POST',
            headers: new Headers({
                'Authorization': localStorage.getItem('AWT'),
                'UID': localStorage.getItem('UID')
            }),
            body: questionData
        })
        .then(res => res.json())
        .then(res => {
            if (res.status) {
                setMessage( <Message type={'alert alert-info text-center'} message={res.message} /> )
                setDisableButton(false)
            }
            else {
                setMessage( <Message type={'alert alert-danger text-center'} message={res.message} /> )
                setDisableButton(false)
            }
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
                        Submit
                    </button>
                </fieldset>
            </form>
            
        </div>
    )
    
}

const Message = (props) => {

    return(
        <div className={props.type} role="alert">
            {props.message}
        </div>
    )
}

export default QuestionsForm
