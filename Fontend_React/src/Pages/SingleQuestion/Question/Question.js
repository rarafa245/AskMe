import React, { useReducer, useEffect } from 'react'
import { AlertCard } from '../../../Components'

const initialState = {
    title: '',
    author: '',
    data: '',
    content: ''
}

const reducer = (state, action) => {

    switch (action.type) {

        case true:
            return ({
                ...state,
                title: action.title,
                author: action.author,
                data: action.data,
                content: action.content
            })
        
        case false:
        default:
            return ({
                ...state,
                title: action.title,
                content: <AlertCard type='FAILURE'
                                    message='ERROR, Please try again'/>
            })
    }

}

function Question(props) {

    const [question, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({
            type: props.status,
            title: props.title,
            author: props.author,
            data: props.data,
            content: props.content,
        })
    }, [props.error])

    return (
        <div className="col-12 mt-2 mb-5">
            <div className="card p-4" >
                <div className="border-bottom mb-3">
                    <h1 className="title">{question.title}</h1>
                    {
                        (question.author) ? 
                            (<p className="text-center text-md-left m-1">
                                <b>Author: </b>{question.author} | {question.data}
                            </p>) :   ''
                    }
                </div>
                <div>
                    {question.content}
                </div>
            </div>
        </div>
    )
}

export default Question