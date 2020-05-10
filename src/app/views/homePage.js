import React from 'react'
import { loadPage } from '../config'
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
        loadPage()
    }

    render(){
        return(
            <div>
                <header>
                    <HomeNav />
                </header>

                <section className="container-fluid">
                    <div className="row">

                        <aside className="col-3 mt-2 px-5
                                            d-none d-sm-none d-md-block
                                            ">
                            <LeftSideBar />
                        </aside>

                        <section className="col-6 mt-2 px-md-3 px-lg-0
                                            col-12 col-md-9 col-lg-6
                                            ">
                            <UserCard mode="home"/>
                            <QuestionGroup />
                        </section>

                        <aside className="col-3 mt-2 px-5
                                            d-none d-sm-none d-md-none d-lg-block  
                                            ">
                            <ManageContactsSide />
                        </aside>

                    </div>
                </section>
            </div>
        )
    }
}

export default Home