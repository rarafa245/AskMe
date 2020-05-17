import React, { useEffect } from 'react'

function LogOut (props) {

    useEffect(() => {
        localStorage.setItem('AWTST', 'false')
        props.history.push('/')
    }, [])

    return (<div></div>)
}

export default LogOut