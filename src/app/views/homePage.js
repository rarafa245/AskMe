import React from 'react'
import NavBar from './../components/navbar'
import LeftSideBar from './../components/leftSideBar'
import HomeCard from './../components/homeCard'
import InfoCard from './../components/infoCard'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    
    componentDidMount(){
        localStorage.setItem('LPC', this.props.location.pathname)
        localStorage.setItem('AWTST', 'true')
    }

    render(){
        return(
            <div>
                <header>
                    <NavBar  home={true}/>
                </header>
                <div className="container-fluid">
                    <div className = "row">
                        <LeftSideBar />
                        <HomeCard />
                        <InfoCard mode={'home'}
                                    title={'Find New Contacts!'}/>
                    </div>
                </div>
            </div>
        )
    }
}

function Info(){
    return(
        <div className="mt-2 col-lg-4">
            <ul className="list-group text-center">
            <li className="list-group-item">
                    <h6>Find New Contacts</h6>
                </li>
                <li className="list-group-item">
                    <Link to="/">Find Contacts</Link>
                </li>
                <li className="list-group-item">
                    <a href="#">Check Out Messages</a>
                </li>
            </ul>
        </div>
    )
}

export default Home