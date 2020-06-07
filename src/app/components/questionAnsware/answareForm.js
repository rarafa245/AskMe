import React from 'react'

function AnswareForm(props) {

    return (
        <form className="mt-3">
            <fieldset>
            <legend className="border-bottom text-center text-md-left mb-2">Send An Answer</legend>

                <div className="form-group">
                    <label htmlFor="Content"><h6>New Answer</h6></label>
                    <textarea id="Content"
                            name="content"
                            rows="5" 
                            cols="50"
                            className="form-control" />
                </div>
                
                <button type="submit" 
                    className="btn bg-steel text-white">
                    Submit
                </button>

            </fieldset>
        </form>
    )

}

export default AnswareForm