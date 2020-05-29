import React, { useState, useReducer, useEffect } from 'react'
import axios from 'axios'
import QuestionCard from '../infoComponents/questionCard'
import ProcessInfoCard from '../infoComponents/processInfoCards'
import { Spinner } from '../infoComponents/loadSpinner'

const initialState = {
    loading: true,
    navAvaliable: false,
    lastPage: '',
    payload: [],
    pages: []
}

const reducer = (state, action) => {
    
    switch (action.type) {

        case true:

            let receivedData, allPages
            let receivedPages = []
            
            receivedData = action.data
            allPages = receivedData.pages

            
            for (let i = 1; i <= receivedData.pages; i++) {
                receivedPages.push( <PaginationNav  key={i}  
                                                    event= {action.func} 
                                                    page= {i}/>)
            }
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
                navAvaliable: true,
                lastPage: allPages,
                payload: total_question,
                pages: receivedPages
            })
        
        case false:

            const message = (<h3 className="text-center m-4"><b>{action.data}</b></h3>)
                return ({
                    ...state,
                    loading: false,
                    payload:message
                })

        default:
            action.errorFunc(<ProcessInfoCard type={'FAILURE'} 
                                            message='An Error Has Occurred. Try Again !' />)
            return ({
            ...state,
            loading: false,
            })

    }
}


function AllQuestions() {

    const [url, setUrl] = useState('1')
    const [questions, dispatch] = useReducer(reducer, initialState)
    const [errorInfo, setErrorInfo] = useState()
    

    useEffect(() => {

        axios.get(`http://localhost:5000/allquestions/10/${url}`, {
            headers: {
                'Authorization': localStorage.getItem('AWT'),
                'UID': localStorage.getItem('UID')
            }
        })
        .then(res => {
            dispatch({
                func: setUrl,
                type: JSON.parse(res.data.status),
                data: (res.data.status) ? JSON.parse(res.data.message)
                                        : res.data.message,
            })
        })
        .catch(err => {
            dispatch({
                type: false,
                errorFunc: setErrorInfo
            })
        })

    }, [url])


    return (

         (questions.loading) ? 
            (   <div className="mt-5 col-12">
                    <div className="d-flex justify-content-center">
                        <Spinner/> 
                    </div>
                </div> 
            )
            :
            (
                <div className="card mt-2 col-12">
                    <p className="m-2 opacity-3"><strong>All Your Questions - Page {url}</strong></p>
                    <div className="card m-1 scroll-big">
                        {errorInfo}
                        {questions.payload}
                    </div>

                {(questions.navAvaliable) ?
                    (<nav className="mt-3">
                        <ul className="pagination">
                            <li className="page-item page-link" onClick={() => { changePage('PREVIOUS', setUrl, url, questions.lastPage) }}>
                                Prev
                            </li>
                                {questions.pages}
                            <li className="page-item page-link" onClick={() => { changePage('NEXT', setUrl, url, questions.lastPage) }}>
                                Next
                            </li>
                        </ul>
                    </nav>
                    )
                    :
                    (<div className="mt-1"></div>) }

                </div>
            ) 
    )
}


const changePage = (type, setUrl, curPage, lastPage) => {

    if (type == 'PREVIOUS') {
        if (curPage == '1') return
        else setUrl( Number(curPage) - 1 )
    } else {
        if (curPage == lastPage) return
        else setUrl( Number(curPage) + 1 )
    }
    
}


const PaginationNav = (props) => (<li className="page-link" 
                                        onClick={() => props.event(props.page)}>
                                    {props.page}
                                </li>)


export default AllQuestions