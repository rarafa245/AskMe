import React, { useEffect } from 'react'
import { loadPage } from '../config'
import HomeNav from '../components/homeComponents/homeNav'
import LeftMenu from '../components/questionsComponents/leftMenu'
import AllQuestions from '../components/questionsComponents/allQuestions'

function UserQuestions (props) {

    useEffect(() => {
        localStorage.setItem('LPC', props.location.pathname)
        localStorage.setItem('AWTST', 'true')
        loadPage(props)
    }, [])

    return (
        <div>
            <header>
                <HomeNav />
            </header>
            <section className="container-fluid">
                <div className="row justify-content-center p-0">

                    <div className="mt-2 col-md-3">
                        <LeftMenu />
                    </div>

                    <div className="row mt-2 col-md-8">
                        <AllQuestions />
                    </div>

                </div>
                
            </section>
        </div>



    )
}

export default UserQuestions