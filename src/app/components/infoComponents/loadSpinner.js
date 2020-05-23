import React from 'react'

function Spinner() {
    return  (
        <div className="spinner-border spinner-border mt-3 mb-5" role="status">
            <span className="sr-only text-center">Loading...</span>
        </div>
    )
}

function ButtonSpinner() {
    return  (
        <div className="spinner-border spinner-border-sm mr-2" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export {
    Spinner,
    ButtonSpinner
}