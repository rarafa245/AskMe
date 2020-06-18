import React, { useReducer, useEffect, useState } from 'react'
import { QuestionCard, AlertCard, Spinner } from '../../../Components'
import { axiosGetQuestions } from '../../../Services'
import { useSelector, useDispatch } from 'react-redux'
import { totalPages } from '../redux'


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


function AllQuestionsGroup(props) {

    const [questions, setQuestions] = useReducer(reducer, initialState)
    const [loadingCards, setLoadingCards] = useState(true)
    const [errorInfo, setErrorInfo] = useState()

    const numOfPages = useSelector( state => state.numOfPages )
    const actualPage = useSelector( state => state.actualPage)
    const dispatch = useDispatch()
    

    useEffect(() => {
        axiosGetQuestions(props.numberOfQuestions, actualPage)
            .then(response => {
                    const questionsInfo = {
                                            type: response.status,
                                            data: response.data,
                                            errorFunc: setErrorInfo
                                        }
                                                             
                    setQuestions(questionsInfo)
                    setLoadingCards(false)
                    dispatch(
                        totalPages(response.pages)
                    )
            })
        
    }, [actualPage])
    
    return (
        <div className='col-12 p-0 m-0'>
            <h3>Total Questions - Page {actualPage}/{numOfPages}</h3>
            <div className={'card scroll'}>
                <div>
                    <div className="d-flex justify-content-center">
                        <Spinner state={loadingCards} />
                    </div>
                    {errorInfo}
                    {questions.formatedQuestions}
                </div>
            </div>
        </div>
        
    )
    

}

export default AllQuestionsGroup
