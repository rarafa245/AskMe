import React from 'react'

class LeftSideBar extends React.Component{

    render(){
        return(
            <div className = "mt-2  col-4 col-sm-3 col-lg-2">
                <nav className="text-center h-lg-100 navbar-expand bg-light">
                    
                    <ul id='leftSideBar' className="navbar-nav mr-auto">
                        <li className="nav-item border-bottom mb-2 mt-1">
                            <a className="nav-link text-body" href="#">Questions</a>
                        </li>
                        <li className="nav-item border-bottom mb-2">
                            <a className="nav-link text-body" href="#">Answares</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link text-body" href="#">Contacts</a>
                        </li>
                    </ul>
                    
                </nav>
            </div>
    )}
}

export default LeftSideBar