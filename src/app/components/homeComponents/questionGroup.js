import React, { useState, useEffect } from 'react'
import QuestionCard from './questionCard'
import axios from 'axios'

function QuestionGroup() {

    const [questions, setQuestions] = useState()

    useEffect(() => {

        axios.get("http://192.168.0.23:5000/userQuestions",{
            headers: {
                'Authorization': localStorage.getItem('AWT'),
                'UID': localStorage.getItem('UID')
            }
        })
        .then(res => {
            let receivedData, index
            let total_question = []
            receivedData = JSON.parse(res.data.message)

            for (index in receivedData){

                total_question.push(
                            <QuestionCard   key = {index}
                                            introduction={index}
                                            datePosted={receivedData[index].date_posted}
                                            title={receivedData[index].title}
                                            content={receivedData[index].content}/>)
            }

            setQuestions(total_question)
        })
    }, [])

    
    return(
        <div className="card scroll-small">
            <p className="m-2 opacity-3"><strong>Your Recent Questions!</strong></p>
            <div>
                {questions}
            </div>
        </div>
    )
    

}

export default QuestionGroup
