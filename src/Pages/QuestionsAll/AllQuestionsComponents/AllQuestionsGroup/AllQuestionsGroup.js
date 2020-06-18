import React, { useReducer, useEffect, useState } from 'react'
import { QuestionCard, AlertCard } from '../../../../Components'
import { useSelector } from 'react-redux'


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
    const [errorInfo, setErrorInfo] = useState()

    const numOfPages = useSelector( state => state.numOfPages )
    const actualPage = useSelector( state => state.actualPage )
    

    useEffect(() => {

        setQuestions({ 
            type: props.type,
            data: props.data,
            errorFunc: setErrorInfo
        })   
        
    }, [props.data])
    
    return (
        <div className='col-12 p-0 m-0'>
            <h3>Total Questions - Page {actualPage}/{numOfPages}</h3>
            <div className={'card scroll'}>
                <div>
                    {errorInfo}
                    {questions.formatedQuestions}
                </div>
            </div>
        </div>
        
    )
    

}

export default AllQuestionsGroup
