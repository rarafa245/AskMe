import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const QuestionCard = (props) =>{

    let current_user = localStorage.getItem('UID')

    return(
        <div className="mt-2 mb-2 p-1">
            <div className="card">
                <Link to={`/${current_user}/${props.id}`}><h6 className="card-header text-white bg-steel truncate">{props.title}</h6></Link>
                <div className="card-body cardheight">
                    <p className="card-text question-content truncate">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard