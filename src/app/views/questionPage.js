import React from 'react'
import { loadPage } from '../config'
import HomeNav from '../components/homeComponents/homeNav'
import UserCard from '../components/homeComponents/userCard'
import QuestionsForm from '../components/questionsComponents/questionsForm'
import QuestionGroup from '../components/homeComponents/questionGroup'


class QuestionPage extends React.Component{

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
                    <div className="row justify-content-around">
                        <div className="mt-2
                                        col-md-5">
                            <UserCard mode='question'/>
                            <div className="d-none d-sm-block">
                                <QuestionGroup />
                            </div>
                        </div>
                        <div className="row mt-2
                                            col-md-6">
                            <QuestionsForm />
                        </div>
                    </div>
                    
                </section>
            </div>
        )
    }
}

export default QuestionPage