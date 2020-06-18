import React, {useState, useEffect} from 'react'

function AlertCard (props) {

    const [classType, setClassType] = useState('')

    useEffect(() => {
        switch (props.type) {
            case true:
            case 'SUCCESS':
                setClassType('alert alert-info text-center')
                break

            case 'LOADING':
                setClassType('alert alert-dark text-center')
                break

            case false:
            case 'FAILURE':
                setClassType('alert alert-danger text-center')
                break
            
            default:
                return
        }
    }, [props.type])

    return(
        <div className={classType} role="alert">
            {props.message}
        </div>
    )
}

export default AlertCard