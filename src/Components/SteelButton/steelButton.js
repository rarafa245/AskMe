import React from 'react'
import { ButtonSpinner } from './../LoadSpinner'

function SteelButton(props) {

    const LOADING = (props.state) ? true : false

    return (
        <button type="submit" 
                disabled={props.disabled}
                className="btn bg-steel text-white">

            { (LOADING) ? <ButtonSpinner state={true}/> : ''}
            {props.content}

        </button>
    )
}

export default SteelButton