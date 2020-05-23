import React, { useReducer, useEffect } from 'react'
import QuestionCard from '../infoComponents/questionCard'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    payload: [],
}

const reducer = (state, action) => {
    
    switch (action.type) {

        case 'FETCH_SUCCESS':

            let receivedData = action.data
            delete receivedData.pages

            let total_question = []
            for (let index in receivedData){
                total_question.push(
                            <QuestionCard   key = {index}
                                            introduction={index}
                                            datePosted={receivedData[index].date_posted}
                                            title={receivedData[index].title}
                                            content={receivedData[index].content}/>)
            }
            
            return ({
                ...state,
                loading: false,
                payload: total_question,
            })
        
        case 'FETCH_ERROR':
            return

        default:
            return

    }
}


function QuestionGroup() {

    const [questions, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {

        axios.get(`http://localhost:5000/allquestions/5/1`, {
            headers: {
                'Authorization': localStorage.getItem('AWT'),
                'UID': localStorage.getItem('UID')
            }
        })
        .then(res => {
            dispatch({
                type: 'FETCH_SUCCESS',
                data: JSON.parse(res.data.message)})
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    
    return(
        <div className="card scroll-small">
            <p className="m-2 opacity-3"><strong>Your Recent Questions!</strong></p>
            <div>
                {questions.payload}
            </div>
        </div>
    )
    

}

export default QuestionGroup
