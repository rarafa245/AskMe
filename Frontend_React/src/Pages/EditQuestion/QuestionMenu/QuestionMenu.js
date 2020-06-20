import React from 'react'
import { Link } from 'react-router-dom'

function QuestionMenu () {

    return (
        <div className="card mt-2 mb-2" >
            <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">
                    <Link className='text-dark title' to="/home">Home</Link>
                </li>
                <li className="list-group-item">
                    <Link className='text-dark title' to="/allquestions">Your Questions</Link>
                </li>
                <li className="list-group-item title">Your Answers</li>
            </ul>
        </div>
    )
}

export default QuestionMenu