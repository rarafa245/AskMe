import React from 'react'
import { Link } from 'react-router-dom'

const SideBar =  () => {

    return(
        <div className="card h-50 mt-4 ml-auto mr-auto col-11 col-lg-4">
            <div className="card-body">
                <h5 className="card-title text-center">Your answers are here!</h5>
                <h6 className="card-subtitle mb-2 text-center">Sign in for free</h6>
                <p className="card-text text-center">
                    Store your questions and answer them. If you need to review such an answer, you can check it out here!
                </p>
                <ul className="list-group">
                    <li className="list-group-item text-center">
                        <Link to="/register">Create new Account</Link>
                    </li>
                    <li className="list-group-item text-center">
                        <a href="#">Forgot Account?</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar