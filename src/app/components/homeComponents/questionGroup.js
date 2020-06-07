import React, { useReducer, useEffect, useState } from 'react'
import axios from 'axios'
import QuestionCard from '../infoComponents/questionCard'
import ProcessInfoCard from '../infoComponents/processInfoCards'
import { Spinner } from '../infoComponents/loadSpinner'


const initialState = {
    payload: []
}

const reducer = (state, action) => {

    switch (action.type) {

        case true:

            let receivedData = action.data
            delete receivedData.pages

            let total_question = []
            for (let index in receivedData){
                total_question.push(
                            <QuestionCard   key = {index}
                                            id={receivedData[index].id}
                                            title={receivedData[index].title}
                                            content={receivedData[index].content}/>)
            }
            
            return ({
                ...state,
                payload: total_question
            })

        case false:

            const message = (<h3 className="text-center m-4"><b>{action.data}</b></h3>)
            return ({
                ...state,
                payload:message,
            })
            

        default:
            action.errorFunc(<ProcessInfoCard type={'FAILURE'} 
                                            message='An Error Has Occurred. Try Again !' />)
            return ({
                ...state,
            })

    }
}


function QuestionGroup() {

    const [questions, dispatch] = useReducer(reducer, initialState)
    const [loadingCards, setLoadingCards] = useState(true)
    const [errorInfo, setErrorInfo] = useState()

    useEffect(() => {

        axios.get(`http://192.168.0.23:5000/allquestions/5/1`, {
            headers: {
                'Authorization': localStorage.getItem('AWT'),
                'UID': localStorage.getItem('UID')
            }
        })
        .then(res => {
            setLoadingCards(false)
            dispatch({
                type: JSON.parse(res.data.status),
                data: (res.data.status) ? JSON.parse(res.data.message)
                                        : res.data.message,
            })
        })
        .catch(err => {
            setLoadingCards(false)
            dispatch({
                type: false,
                errorFunc: setErrorInfo
            })
        })

    }, [])

    
    return(
        <div className="card scroll-small">
            <p className="m-2 opacity-3"><strong>Your Recent Questions!</strong></p>
            <div>
                <div className="d-flex justify-content-center">
                    { loadingCards ? <Spinner/> : ''}
                </div>
                {errorInfo}
                {questions.payload}
            </div>
        </div>
    )
    

}

export default QuestionGroup
