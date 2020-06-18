import React, { useReducer, useEffect, useState } from 'react'
import QuestionCard from '../QuestionCard'
import AlertCard from '../AlertCard'
import { Spinner } from '../LoadSpinner'
import { axiosGetQuestions } from '../../Services'


const initialState = {
    formatedQuestions: []
}

const reducer = (state, action) => {

    switch (action.type) {

        case true:

            const receivedData = action.data

            let total_question = []
            for (let index in receivedData){
                total_question.push (
                            <QuestionCard   key = {index}
                                            id={receivedData[index].id}
                                            title={receivedData[index].title}
                                            content={receivedData[index].content}/>)
            }
            
            return ({
                ...state,
                formatedQuestions: total_question
            })

        case false:
            const message = [(<h3 className="text-center m-4" key={1}><b>{action.data}</b></h3>)]
            return ({
                ...state,
                formatedQuestions:message,
            })
            

        default:
            action.errorFunc(<AlertCard type={'FAILURE'} 
                                            message='An Error Has Occurred. Try Again !' />)
            return ({
                ...state,
            })

    }
}


function QuestionContainer(props) {

    const [questions, dispatch] = useReducer(reducer, initialState)
    const [loadingCards, setLoadingCards] = useState(true)
    const [errorInfo, setErrorInfo] = useState()
    

    useEffect(() => {
        

        axiosGetQuestions(props.numberOfQuestions, props.pagination)
            .then(response => {
                    const questionsInfo = {
                                            type: response.status,
                                            data: response.data,
                                            errorFunc: setErrorInfo
                                            }
                                                             
                    dispatch(questionsInfo)
                    setLoadingCards(false)
                    
            })
        
    }, [])
    
    return (
        <div className={'card scroll-small'}>
            <div>
                <div className="d-flex justify-content-center">
                    <Spinner state={loadingCards} />
                </div>
                {errorInfo}
                {questions.formatedQuestions}
            </div>
        </div>
    )
    

}

export default QuestionContainer
