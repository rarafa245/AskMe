import React, { useEffect } from 'react'
import { HomeNav } from '../../Components'
import AllQuestionsMenu from './AllQuestionsMenu'
import AllQuestionsGroup from './AllQuestionsGroup'
import AllQuestionsPagination from './AllQuestionsPagination'
import { axiosRefreshToken } from '../../Services'
import { Provider } from 'react-redux'
import store from './redux/store'


function QuestionsAll (props) {
    const numberOfQuestions = 10

    useEffect(() => {
        axiosRefreshToken(props)
        localStorage.setItem('LPC', props.location.pathname)
        localStorage.setItem('AWTST', 'true')
    }, [])

    return (
        <div>
            <header>
                <HomeNav />
            </header>
            <section className="container-fluid">
                <div className="row justify-content-center p-0">

                    <div className="mt-2 col-md-3">
                        <AllQuestionsMenu />
                    </div>

                    <div className="row mt-2 col-md-8">
                        <Provider store={store} >
                            <AllQuestionsGroup  numberOfQuestions={numberOfQuestions} />
                            <AllQuestionsPagination />
                        </Provider>
                    </div>

                </div>
                
            </section>
        </div>
    )
}

export default QuestionsAll