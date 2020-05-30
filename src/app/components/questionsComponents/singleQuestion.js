import React, { useState, useReducer, useEffect } from 'react'
import axios from 'axios'
import ProcessInfoCard from '../infoComponents/processInfoCards'
import { Spinner } from '../infoComponents/loadSpinner'


const initialState = {
    loading: true,
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
                loading: false,
                title: action.title,
                author: `${action.author} `,
                data: action.data,
                content: action.content
            })
        
        case false:

            return ({
                ...state,
                title: action.title,
                loading: false
            })
        
        default:

            return ({
                ...state,
                loading: false,
                content: <ProcessInfoCard type='FAILURE'
                                            message='ERROR, Please try again'/>
            })
    }

}


function SingleQuestion (props) {

    const question_id = props.match.params.id
    const question_author = props.match.params.username
    const [question, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {

        axios.get(`http://localhost:5000/question/${question_author}/${question_id}`)
        .then(res => {

            dispatch ({
                type: res.data.status,
                title: res.data.title,
                author: res.data.author,
                data: res.data.data,
                content: res.data.content
            })

        })
        .catch(err => {

            dispatch ({
                type: 'ERROR',
                title: null,
                author: null,
                data: null,
                content: null
            }) 
        })

    }, [])


    return(

        (question.loading) ? 
            ( <div className="card col-12 mt-2 p-4" >
                <div className="d-flex justify-content-center">
                    <Spinner/> 
                </div>
            </div>
            )
            :
            ( <div className="card col-12 mt-2 p-4" >
                <div className="border-bottom mb-3">
                    <h1 className="title">{question.title}</h1>
                    {
                        (question.author) ? (<p className="text-center text-md-left m-1"><b>Author: </b>{question.author} | {question.data}</p>)
                                            :   ''
                    }
                </div>
                <div>
                    {question.content}
                </div>
            </div>
            )
    )
}

export default SingleQuestion