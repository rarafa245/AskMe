import React, { useEffect } from 'react'
import { HomeNav, QuestionContainer } from './../../Components'
import { axiosRefreshToken } from '../../Services'
import LeftMenu from './leftMenu'
import ContactMenu from './contactMenu'
import UserCard from './userCard'

function HomePage (props) {

    const pagination = '1'
    const numberOfQuestions = '5'

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
                <div className="row">

                    <aside className="col-3 mt-2 px-5
                                        d-none d-sm-none d-md-block
                                        ">
                        <LeftMenu />
                    </aside>

                    <section className="col-6 mt-2 px-md-3 px-lg-0
                                        col-12 col-md-9 col-lg-6
                                        ">
                        <UserCard />
                        <div>
                            <p className="m-2 opacity-3"><strong>Your Recent Questions!</strong></p>
                            <QuestionContainer  pagination={pagination}
                                                numberOfQuestions={numberOfQuestions}/>
                        </div>
                    </section>

                    <aside className="col-3 mt-2 px-5
                                        d-none d-sm-none d-md-none d-lg-block  
                                        ">
                        <ContactMenu />
                    </aside>

                </div>
            </section>
        </div>
    )
    
}

export default HomePage