import React, { useEffect, useReducer } from 'react'
import {Link} from 'react-router-dom'


const initialState = {
    firstInfo: '',
    secondInfo: 'Forgot Account?',
    firstInfoLink: '',
    secondInfoLink: '#',
    title: '',
    subtitle: '',
    message: ''
}

const setBarInfo = (state, action) => {

    switch (action) {
        
        case '/register':
            return {
                ...state,
                firstInfo: 'Return',
                firstInfoLink: '/',
                title: 'Come on, Join This Community!',
                subtitle: 'Free for all',
                message: 'You can ask your questions to get answers from other users and store them for future reference'
            }
        
        case '/':
        default:
            return {
                ...state,
                firstInfo: 'Create new Account',
                firstInfoLink: '/register',
                title: 'Your answers are here!',
                subtitle: 'sign in for free',
                message: 'Store your questions and answer them. If you need to review such an answer, you can check it out here!'
            }
    }
}


const IntroduceBar =  () => {

    const [barInfos, dispatch] = useReducer(setBarInfo, initialState)
    
    useEffect(() => dispatch(localStorage.getItem('LPC')) , [localStorage.getItem('LPC')])


    return(
        <div className="card h-50 mt-4 ml-auto mr-auto col-11 col-lg-4">
            <div className="card-body">
                <h5 className="card-title text-center">{barInfos.title}</h5>
                <h6 className="card-subtitle mb-2 text-center">{barInfos.subtitle}</h6>
                <p className="card-text text-center">
                    {barInfos.message}
                </p>
                <ul className="list-group">
                    <li className="list-group-item text-center">
                        <Link to={barInfos.firstInfoLink}>{barInfos.firstInfo}</Link>
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