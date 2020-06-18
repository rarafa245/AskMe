import React, {useState, useEffect} from 'react'

function Answers(props) {

    const [answersGroup, setAnswersGroup] = useState('')
    const [numberOfAnswers, setNumberOfAnswers] = useState(0)

    useEffect(() => {

        const formatedAnswers = []
        let countAnswers = 0
        for (let index in props.answers) {
            formatedAnswers.push ( <AnswarCard  key={index}
                                                author={props.answers[index].author}
                                                content={props.answers[index].content} />)
            countAnswers++
        }

        setNumberOfAnswers(countAnswers)
        setAnswersGroup(formatedAnswers)

    }, [props.answers])


    return (
        <div className={'col-12'}>
            <h1 className='m-2'>{numberOfAnswers} Answers</h1>
            {answersGroup}
        </div>
    )
}

const AnswarCard = (props) => {

    return (
        <div className='card mt-2 p-3'>
            <div className='mb-2 border-bottom'>
                <p className='d-inline'><b> Author:</b> {props.author}</p>
            </div>
            <p>{props.content}</p>
        </div>

    )
}

export default Answers