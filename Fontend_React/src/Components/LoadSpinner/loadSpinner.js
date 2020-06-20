import React, { useState } from 'react'

function Spinner(props) {

    const STATE = (props.state) ? true : false

    return  (
        (STATE) ?   ( <div className="spinner-border spinner-border mt-3 mb-5" role="status">
                        <span className="sr-only text-center">Loading...</span>
                      </div> )
                    : ""
                    
    )
}

function ButtonSpinner(props) {

    const STATE = (props.state) ? true : false

    return  (
        (STATE) ?   ( <div className="spinner-border spinner-border-sm mr-2" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>)
                    : ""
    )
}

export {
    Spinner,
    ButtonSpinner
}