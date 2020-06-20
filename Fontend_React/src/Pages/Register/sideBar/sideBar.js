import React from 'react'
import { Link } from 'react-router-dom'

const SideBar =  () => {

    return(
        <div className="card h-50 mt-4 ml-auto mr-auto col-11 col-lg-4">
            <div className="card-body">
                <h5 className="card-title text-center">Come on, Join This Community!</h5>
                <h6 className="card-subtitle mb-2 text-center">Free for all</h6>
                <p className="card-text text-center">
                    You can ask your questions to get answers from other users and store them for future reference
                </p>
                <ul className="list-group">
                    <li className="list-group-item text-center">
                        <Link to="/">Return</Link>
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