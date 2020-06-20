import React, { useState,useEffect } from 'react'
import AllQuestionsGroup from './AllQuestionsGroup'
import AllQuestionsPagination from './AllQuestionsPagination'
import { Spinner } from '../../../Components'
import { axiosGetQuestions } from '../../../Services'
import { useSelector, useDispatch } from 'react-redux'
import { totalPages } from '../redux'

function AllQuestionsComponents() {
    const numberOfQuestions = 10
    const [questionsInfo, setQuestionsInfo] = useState('')
    const [loading, setLoading] = useState(true)
    const actualPage = useSelector( state => state.actualPage )
    const dispatch = useDispatch()
    
    useEffect(() => {
        axiosGetQuestions(numberOfQuestions, actualPage)
            .then(response => {
                const responseInfos = {
                                        type: response.status,
                                        data: response.data,
                                    }

                setQuestionsInfo(responseInfos)
                setLoading(false)
                dispatch(
                    totalPages(response.pages)
                )
            })
        
    }, [actualPage])

    return (
        <div className="col-12 p-0">

            {
                (loading) ? (<div className="row">
                                <div className="ml-auto mr-auto">
                                    <Spinner state={loading}/>
                                </div>
                            </div>)


                          : ( <div className="col-12 p-0 row ml-auto mr-auto">
                                <AllQuestionsGroup  type={questionsInfo.type}
                                                    data={questionsInfo.data} />
                              <AllQuestionsPagination />
                              </div>
                              )
            }
            
        </div>
    )

}

export default AllQuestionsComponents