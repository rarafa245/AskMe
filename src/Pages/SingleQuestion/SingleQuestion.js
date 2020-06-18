import React, { useState, useEffect } from 'react'
import { HomeNav, Spinner } from '../../Components' 
import Answers from './Answers'
import Question from './Question'
import AnswerForm from './AnswerForm'
import { getQuestionAndAnswers } from '../../Services'


function SingleQuestion(props) {
    const questionId = props.match.params.id
    const questionAuthor = props.match.params.username
    const [answerQuestionInfo, setAnswerQuestionInfo] = useState('')
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        getQuestionAndAnswers(questionAuthor, questionId)
            .then(response => {
                setAnswerQuestionInfo(response)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <header>
                <HomeNav />
            </header>
            <section className="container-fluid">
                <div className="row justify-content-center p-0">

                    {
                        (loading) ? (<Spinner state={loading}/>)
                                :
                                ( <div className="row mt-2 col-sm-10 col-md-8">
                                    <Question   status={answerQuestionInfo.status}
                                                author={answerQuestionInfo.author}
                                                data={answerQuestionInfo.data}
                                                title={answerQuestionInfo.title}
                                                content={answerQuestionInfo.content}
                                                error={answerQuestionInfo.error}/>
                                    
                                    <Answers    status={answerQuestionInfo.status}
                                                answers={answerQuestionInfo.answers}/>
                                    <AnswerForm {...props}
                                                questionId={questionId}/>
                                 </div>)
                    }

                </div>
            </section>

        </div>
    )
}

export default SingleQuestion