import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UserCard(){

    const [pic, setPic] = useState()

    useEffect(() => {
        fetch("http://localhost:5000/profilepic",{
            method: "GET",
            headers: new Headers({
                'Authorization': localStorage.getItem('AWT'),
                'UID': localStorage.getItem('UID'),
                'Cache-control': 'no-cache'
            })
        })
        .then(res => res.blob())
        .then(res => {
            const image = URL.createObjectURL(res)
            setPic(image)
        })

        return () => {
            URL.revokeObjectURL(pic)
        }

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