import React, { useEffect } from 'react'
import { loadPage } from '../config'
import HomeNav from '../components/homeComponents/homeNav'
import UserCard from '../components/homeComponents/userCard'
import QuestionsForm from '../components/questionsComponents/questionsForm'
import LeftMenu from '../components/questionsComponents/leftMenu'
import QuestionGroup from '../components/homeComponents/questionGroup'


function QuestionPage (props) {

    useEffect(() => {
        localStorage.setItem('LPC', props.location.pathname)
        localStorage.setItem('AWTST', 'true')
        loadPage()
    }, [])

    return(
        <div>
            <header>
                <HomeNav />
            </header>
            <section className="container-fluid">
                <div className="row justify-content-around p-0">

                    <div className="mt-2 col-md-5">
                        <LeftMenu />
                        <QuestionGroup />
                    </div>

                    <div className="row mt-2 col-md-6">
                        <QuestionsForm />
                    </div>

                </div>
                
            </section>
        </div>
    )
    
}

export default QuestionPage