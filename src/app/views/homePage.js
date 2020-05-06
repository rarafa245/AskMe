import React from 'react'
import LeftSideBar from '../components/homeComponents/leftSideBar'
import UserCard from '../components/homeComponents/userCard'
import HomeNav from '../components/homeComponents/homeNav'
import ManageContactsSide from '../components/homeComponents/manageContactsSide'

class Home extends React.Component{
    
    componentDidMount(){
        localStorage.setItem('LPC', this.props.location.pathname)
        localStorage.setItem('AWTST', 'true')
    }

    render(){
        return(
            <div>
                <header>
                    <HomeNav />
                </header>
                <div className="container-fluid">
                    <div className = "row">
                        <LeftSideBar />
                        <UserCard />
                        <ManageContactsSide />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home