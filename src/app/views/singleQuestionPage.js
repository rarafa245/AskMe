import React from 'react'
import HomeNav from '../components/homeComponents/homeNav'
import SingleQuestion from '../components/questionsComponents/singleQuestion'

function SingleQuestionPage (props) {

    return(
        <div>
            <header>
                <HomeNav />
            </header>
            <section className="container-fluid">
                <div className="row justify-content-center p-0">

                    <div className="row mt-2 col-sm-10 col-md-8">
                        <SingleQuestion {...props}/>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default SingleQuestionPage