import React from 'react'
import LeftSideBar from '../components/homeComponents/leftSideBar'
import UserCard from '../components/homeComponents/userCard'
import HomeNav from '../components/homeComponents/homeNav'
import ManageContactsSide from '../components/homeComponents/manageContactsSide'
import QuestionGroup from '../components/homeComponents/questionGroup'


class Home extends React.Component{
    constructor(){
        super()
        this.state={
            userImage: "",
            questions: "" 
        }
    }
    
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
                <section className="container-fluid">
                    <div className="row">
                        <LeftSideBar />
                        <UserCard mode="home"/>
                        <ManageContactsSide />
                    </div>
                    <div className="p-0 ml-auto mr-auto col-lg-10">
                        <QuestionGroup />
                    </div>
                </section>
            </div>
        )
    }
}

export default Home