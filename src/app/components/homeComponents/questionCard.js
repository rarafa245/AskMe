import React from 'react'
import {Link} from 'react-router-dom'

const QuestionCard = (props) =>{

    return(
        <div className="row">
            <div className="card mt-3  p-0 col-10 ml-auto mr-auto">
                    <h5 className="card-header ww-100">{props.introduction} <span className="pull-right"> : {props.datePosted}</span></h5>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard