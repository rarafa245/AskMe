import React from 'react'


class QuestionsForm extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            content: '',
            message: '',
            disabledButton: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        // Change Input Callback - Change the value of the form inputs

        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    handleSubmit = (event) => {

        event.preventDefault()

        this.setState({
            message: <Message type={'alert alert-dark text-center'} 
                                message={'Wait a moment...'} />,
            disabledButton: true
        })

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
                this.setState({
                    message: <Message type={'alert alert-info text-center'} 
                                message={res.message} />,
                    title: '',
                    content: '',
                    disabledButton: false
                })
            }
            else {
                this.setState({
                    message: <Message type={'alert alert-danger text-center'} 
                                message={res.message} />,
                    disabledButton: false
                })
            }
        })
    }


    render(){
        return(
            <div className="col-12">

                <form onSubmit={this.handleSubmit}>
                    <fieldset className="form-group">
                        <legend className="border-bottom text-center text-md-left mb-4">New Question?</legend>

                        {this.state.message}

                        <div className="form-group">
                            <label htmlFor="Title"><h6>Question Title</h6></label>
                            <input id="Title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    type="text" 
                                    className="form-control mb-2" />
                            
                            <label htmlFor="Content"><h6>Whats Your Question?</h6></label>
                            <textarea id="Content"
                                    name="content"
                                    rows="5" 
                                    cols="50"
                                    onChange={this.handleChange}
                                    value={this.state.content} 
                                    className="form-control" />
                        </div>

                        <button type="submit" 
                                disabled={this.state.disabledButton}
                                className="btn bg-steel text-white">
                            Submit
                        </button>
                    </fieldset>
                </form>
                
            </div>
        )
    }
}

function Message(props) {
    /* Success or Falue alert
        :parram - type: Type of the message
                message: Info message
    */

    return(
        <div className={props.type} role="alert">
            {props.message}
        </div>
    )
}

export default QuestionsForm
