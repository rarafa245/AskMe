import React, { useState, useEffect } from 'react'

const QuestionCard = (props) =>{

    return(
        <div className="mt-2 mb-2 p-1">
            <div className="card">
                <h6 className="card-header text-white bg-steel truncate">{props.title}</h6>
                <div className="card-body cardheight">
                    <p className="card-text question-content truncate">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard