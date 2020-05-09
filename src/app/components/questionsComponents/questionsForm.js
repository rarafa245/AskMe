import React from 'react'


class QuestionsForm extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            subtitle: '',
            content: ''
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
        /* Submit Callback - Send values to Server
            * Check if there´s a last page to return (Token expiration)
            * Save infos in localStorage
            * Redirect Client 
        */

        event.preventDefault()
        const logginData = new FormData(event.target)

        
    }


    render(){
        return(
            <div className="col-12">

                <form onSubmit={this.handleSubmit} className="mt-1">
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
                            
                            <label htmlFor="Subtitle"><h6>Question Subtitle</h6></label>
                            <input id="Subtitle"
                                    name="subtitle"
                                    onChange={this.handleChange}
                                    value={this.state.subtitle} 
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
