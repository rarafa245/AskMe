import React, { useState,useEffect } from 'react'
import axios from 'axios'


function SingleQuestion (props) {

    const question_id = props.match.params.id
    const question_author = props.match.params.username

    const [questionTitle, setQuestionTitle] = useState()
    const [questionAuthor, setQuestionAuthor] = useState()
    const [questionData, setQuestionData] = useState()
    const [questionContent, setQuestionContent] = useState()


    useEffect(() => {

        axios.get(`http://localhost:5000/question/${question_author}/${question_id}`)
        .then(res => {
            setQuestionTitle(res.data.title)
            setQuestionAuthor(res.data.author)
            setQuestionContent(res.data.content)
            setQuestionData(res.data.data)
            console.log(res)
        })
        .catch(err => {
            console.log(question_id)
            console.log(question_author)
        })
    }, [])


    return(
        <div className="card col-12 mt-2 p-4" >
            <div className="border-bottom mb-3">
                <h1 className="title">{questionTitle}</h1>
                <p className="text-center text-md-left m-1"><b>Author: </b>{questionAuthor} - {questionData}</p>
            </div>
            <div>
                {questionContent}
            </div>
        </div>
    )
}

export default SingleQuestion