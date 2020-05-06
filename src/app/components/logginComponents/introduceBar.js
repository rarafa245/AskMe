import React from 'react'
import {Link} from 'react-router-dom'

const IntroduceBar =  (props) =>{

    let firstInfo = ''
    let firstInfoLink = ''

    if (props.mode == 'home') {
        firstInfo = 'Create new Account'
        firstInfoLink = '/register'
    } else {
        firstInfo = 'Return'
        firstInfoLink = '/'
    }

    return(
        <div className="card h-50 mt-4 ml-auto mr-auto col-11 col-lg-4">
            <div className="card-body">
                <h5 className="card-title text-center">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-center">{props.subtitle}</h6>
                <p className="card-text text-center">
                    {props.message}
                </p>
                <ul className="list-group">
                    <li className="list-group-item text-center">
                        <Link to={firstInfoLink}>{firstInfo}</Link>
                    </li>
                    <li className="list-group-item text-center">
                        <a href="#">Forgot Account?</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default IntroduceBar