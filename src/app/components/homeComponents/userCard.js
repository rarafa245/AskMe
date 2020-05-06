import React from 'react'

class userCard extends React.Component{

    render(){
        return(
            <article className="media mt-2 ml-auto mr-auto 
                                content-section 
                                col-11 col-sm-8 col-lg-6">
                <img className="rounded-circle article-img" src='#' />
                <div className="media-body">
                    <h3 className="article-metadata text-center text-sm-left"><a className="article-title" href="#">
                        Hi {localStorage.getItem('UID')}
                    </a></h3>
                    <p className="mt-3 text-center text-sm-left">9999 New Messages</p>
                    <p className="text-center text-sm-left">9999 New Invitations</p>
                </div>
            </article>
        )}
}

export default userCard