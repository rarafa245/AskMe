import React from 'react'
import { Link } from 'react-router-dom'

function LeftMenu () {

    return (
        <div className="card mt-2 mb-4" >
            <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">
                <Link className='text-dark' to="/home">Home</Link>
                </li>
                <li className="list-group-item">Your Questions</li>
                <li className="list-group-item">Your Answers</li>
            </ul>
        </div>
    )
}

export default LeftMenu