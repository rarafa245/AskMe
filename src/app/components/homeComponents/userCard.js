import React from 'react'

class UserCard extends React.Component{
    constructor(){
        super()
        this.state = {
            pic: ""
        }
    }

    componentDidMount(){
        fetch("http://192.168.0.23:5000/profilepic",{
            method: "GET",
        })
        .then(res => res.blob())
        .then(res => this.setState({pic: URL.createObjectURL(res)}) )

    }

    render(){
        return(
            <article className="media content-section">
                <img className="rounded-circle article-img" src={this.state.pic} />
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

}

export default UserCard