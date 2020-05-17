import React, { useState, useEffect } from 'react'

function QuestionGroup() {

    const [questions, setQuestions] = useState()

    useEffect(() => {
        fetch("http://192.168.0.23:5000/userQuestions",{
            method: "GET",
            headers: new Headers({
                'Authorization': localStorage.getItem('AWT'),
                'UID': localStorage.getItem('UID')
            })
        })
        .then(res => res.json())
        .then(res => {
            let receivedData, index
            let total_question = []
            receivedData = JSON.parse(res.message)

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
            <div className="justify-content-around">
                <p className="m-2 opacity-3"><strong>Your Recent Questions!</strong></p>
            </div>
            <div>
                {questions}
            </div>
        </div>
    )
    

}

const QuestionCard = (props) =>{

    return(
        <div className="mb-2 p-2">
            <div className="card">
                <h6 className="card-header text-white bg-steel truncate">{props.title}</h6>
                <div className="card-body cardheight">
                    <p className="card-text question-content truncate">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionGroup
