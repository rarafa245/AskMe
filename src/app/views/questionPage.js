import React from 'react'
import HomeNav from '../components/homeComponents/homeNav'
import UserCard from '../components/homeComponents/userCard'
import QuestionsForm from '../components/questionsComponents/questionsForm'

class QuestionPage extends React.Component{
    

    render(){
        return(
            <div>
                <header>
                    <HomeNav />
                </header>
                <section className="container-fluid">
                    <div className="row">
                        <div className="row h-50 m-1 
                                        col-md-7 col-lg-6 col-xl-5">
                            <UserCard mode='question'/>
                        </div>
                        <div className="row p-1 ml-auto mr-auto
                                            col-md-4 col-lg-5 col-xl-6">
                            <QuestionsForm />
                        </div>
                    </div>
                    
                </section>
            </div>
        )
    }
}

export default QuestionPage