import React from 'react'
import { Link } from 'react-router-dom'

const LeftMenu = (props) => (
    <nav className="text-center h-lg-100 navbar-expand">
        
        <ul id='leftSideBar' className="navbar-nav mr-auto">
            <li className="nav-item border-bottom mb-2 mt-1">
                <Link className="nav-link text-body" to="/questions">Questions</Link>
            </li>
            <li className="nav-item border-bottom mb-2">
                <a className="nav-link text-body" href="#">Messages</a>
            </li>
            <li className="nav-item mb-2">
                <a className="nav-link text-body" href="#">Search</a>
            </li>
        </ul>
        
    </nav>
)


export default LeftMenu