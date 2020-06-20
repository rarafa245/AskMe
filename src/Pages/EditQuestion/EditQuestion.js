import React, { useState, useEffect } from 'react'
import { HomeNav, Spinner } from '../../Components'
import QuestionMenu from './QuestionMenu'
import EditQuestionForm from './EditQuestionForm'
import { axiosGetQuestionSimple } from '../../Services' 

function EditQuestion(props) {
    const questionId = props.match.params.id
    const questionAuthor = props.match.params.username
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [status, setStatus] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axiosGetQuestionSimple(questionAuthor, questionId)
            .then((response) => {
                setTitle(response.title)
                setContent(response.content)
                setStatus(response.status)
                setLoading(false)
            })

    }, [])

    return (
        <div>
            <header>
                <HomeNav />
            </header>
            <section className="container-fluid">
                <div className="row justify-content-around p-0">

                    <div className="mt-2 col-md-3">
                        <QuestionMenu />
                    </div>

                    <div className="row mt-2 col-md-8">
                        {   (loading) ? (<div className={"ml-auto mr-auto"}>
                                            <Spinner state={loading}/>
                                         </div>
                                        )
                                :
                                        (<EditQuestionForm  {...props}
                                                            questionId={questionId}
                                                            title={title}
                                                            content={content}
                                                            status={status}/>
                                        )
                        }
                    </div>

                </div>
                
            </section>
        </div>
    )
}

export default EditQuestion