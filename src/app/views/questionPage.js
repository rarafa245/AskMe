import React from 'react'
import HomeNav from '../components/homeComponents/homeNav'
import UserCard from '../components/homeComponents/userCard'

class QuestionPage extends React.Component{
    

    render(){
        return(
            <div>
                <header>
                    <HomeNav />
                </header>
                <section className="container-fluid">
                    <div className="row col-md-7 col-lg-6 col-xl-5">
                        <UserCard mode='question'/>
                    </div>
                </section>
            </div>
        )
    }
}

export default QuestionPage