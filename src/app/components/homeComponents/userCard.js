import React, { useState, useEffect } from 'react'

function UserCard(){

    const [pic, setPic] = useState()

    useEffect(() => {
        fetch("http://192.168.0.23:5000/profilepic",{
            method: "GET",
        })
        .then(res => res.blob())
        .then(res => setPic( URL.createObjectURL(res) ) )
    }, [])

    return(
        <article className="media content-section">
            <img className="rounded-circle article-img" src={pic} />
            <div className="media-body">
                <h4 className="article-metadata title text-center text-md-left">
                    <a className="article-title" href="#">
                        Hi {localStorage.getItem('UID')}
                    </a>
                </h4>
                <p className="mt-3 text-center text-sm-left">9999 New Messages</p>
                <p className="text-center text-sm-left">9999 New Invitations</p>
            </div>
        </article>
    )


}

export default UserCard