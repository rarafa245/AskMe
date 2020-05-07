import React from 'react'
import {Link} from 'react-router-dom'

const QuestionCard = (props) =>{

    return(
        <div className="row">
            <div className="card mt-3  p-0 col-10 ml-auto mr-auto">
                    <h6 className="card-header ww-100">{props.introduction} <span className="pull-right"> : {props.datePosted}</span></h6>
                <div className="card-body">
                    <h6 className="card-title">{props.title}</h6>
                    <p className="card-text">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard