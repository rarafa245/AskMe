import React from 'react'

function AnswarCard(props) {

    return (
        <div className='card mt-2 p-3'>
            <div className='mb-2 border-bottom'>
                <p className='d-inline'><b> Author:</b> {props.author}</p>
            </div>
           
            <p>{props.content}</p>
        </div>

    )
}

export default AnswarCard