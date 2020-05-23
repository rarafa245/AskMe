import React, {useState, useEffect} from 'react'

function ProcessInfoCard (props) {

    const [classType, setClassType] = useState('')

    useEffect(() => {
        switch (props.type) {
            case 'SUCCESS':
                setClassType('alert alert-info text-center')
                break

            case 'LOADING':
                setClassType('alert alert-dark text-center')
                break

            case 'FAILURE':
                setClassType('alert alert-danger text-center')
                break
        }
    })

    return(
        <div className={classType} role="alert">
            {props.message}
        </div>
    )
}

export default ProcessInfoCard