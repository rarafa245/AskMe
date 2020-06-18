import React, { useEffect } from 'react'
import { HomeNav } from '../../Components'
import AllQuestionsMenu from './AllQuestionsMenu'
import AllQuestionsComponents from './AllQuestionsComponents'
import { Provider } from 'react-redux'
import store from './redux/store'


function QuestionsAll (props) {
    const numberOfQuestions = 10

    useEffect(() => {
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

                    <div className="row mt-2 col-md-9">
                        <Provider store={store} >
                            <AllQuestionsComponents />
                        </Provider>
                    </div>

                </div>
                
            </section>
        </div>
    )
}

export default QuestionsAll