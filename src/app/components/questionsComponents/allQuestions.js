import React, { useState, useEffect } from 'react'
import QuestionCard from '../homeComponents/questionCard'
import axios from 'axios'

function AllQuestions() {

    const [questions, setQuestions] = useState()

    useEffect(() => {
        axios.get('http://192.168.0.23:5000/allquestions', {
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
        <div className="card mt-2 col-12">
            <p className="m-2 opacity-3"><strong>All Your Questions</strong></p>
            <div>
                {questions}
            </div>
        </div>
    )
}

export default AllQuestions