import React, { useState, useReducer, useEffect } from 'react'
import QuestionCard from '../homeComponents/questionCard'
import axios from 'axios'

const initialState = {
    lastPage: '',
    loading: true,
    error: '',
    payload: [],
    pages: []
}

const reducer = (state, action) => {
    
    switch (action.type) {

        case 'FETCH_SUCCESS':

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
                lastPage: allPages,
                loading: false,
                payload: total_question,
                pages: receivedPages
            })
        
        case 'FETCH_ERROR':
            return

    }
}


function AllQuestions() {

    const [url, setUrl] = useState('1')
    const [questions, dispatch] = useReducer(reducer, initialState)
    

    useEffect(() => {

        axios.get(`http://192.168.0.23:5000/allquestions/${url}`, {
            headers: {
                'Authorization': localStorage.getItem('AWT'),
                'UID': localStorage.getItem('UID')
            }
        })
        .then(res => {
            dispatch({
                type: 'FETCH_SUCCESS',
                func: setUrl,
                data: JSON.parse(res.data.message)})
        })
        .catch(err => {
            console.log(err)
        })

    }, [url])


    return (
        <div className="card mt-2 col-12">
            <p className="m-2 opacity-3"><strong>All Your Questions - Page {url}</strong></p>
            <div className="card m-1 scroll-big">
                {questions.payload}
            </div>

            <nav className="mt-3">
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

        </div>
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