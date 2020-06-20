import React, { useEffect } from 'react'

function LogoutPage (props) {

    useEffect(() => {
        localStorage.setItem('AWTST', 'false')
        props.history.push('/')
    }, [])

    return (<div></div>)
}

export default LogoutPage