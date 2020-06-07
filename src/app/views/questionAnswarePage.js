import React from 'react'
import HomeNav from '../components/homeComponents/homeNav'
import QuestionTemplate from '../components/questionAnsware/questionTemplate'

function QuestionAnswarePage (props) {

    return(
        <div>
            <header>
                <HomeNav />
            </header>
            <section className="container-fluid">
                <div className="row justify-content-center p-0">

                    <div className="row mt-2 col-sm-10 col-md-8">
                        <QuestionTemplate {...props}/>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default QuestionAnswarePage