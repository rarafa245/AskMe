import React, { useEffect } from 'react'
import { HomeNav, QuestionContainer } from '../../Components'
import { axiosRefreshToken } from '../../Services'
import QuestionMenu from './QuestionMenu'
import CreateQuestionForm from './CreateQuestionForm'

function QuestionGeneral (props) {
    
    const pagination = '1'
    const numberOfQuestions = '5'

    useEffect(() => {
        axiosRefreshToken(props)
        localStorage.setItem('LPC', props.location.pathname)
        localStorage.setItem('AWTST', 'true')
    }, [])

    return (
        <div>
            <header>
                <HomeNav />
            </header>
            <section className="container-fluid">
                <div className="row justify-content-around p-0">

                    <div className="mt-2 col-md-5">
                        <QuestionMenu />
                        <div className='mt-3'>
                            <p className="m-2 opacity-3"><strong>Your Recent Questions!</strong></p>
                            <QuestionContainer  pagination={pagination}
                                                numberOfQuestions={numberOfQuestions}/>
                        </div>
                    </div>

                    <div className="row mt-2 col-md-6">
                       <CreateQuestionForm {...props}/>
                    </div>

                </div>
                
            </section>
        </div>
    )
    
}

export default QuestionGeneral