import React from 'react'

class userCard extends React.Component{
    constructor(){
        super()
        this.state = {
            home: {
                mode: 'home',
                width: ' col-11 col-sm-8 col-lg-6',
                margin: ' mt-2 ml-auto mr-auto'
            },
            question: {
                mode: 'question',
                width: ' col-12',
                margin: ' mt-2'
            },
            componentDefinitions: ''
        }
    }

    componentDidMount(){
        if (this.props.mode == this.state.home.mode) {

            this.setState({
                componentDefinitions: 'media content-section '
                                        + this.state.home.width
                                        + this.state.home.margin
            })
        }

        if (this.props.mode == this.state.question.mode) {
            
            this.setState({
                componentDefinitions: 'media content-section'
                                        + this.state.question.width
                                        + this.state.question.margin
            })
        }


    }

    render(){



        return(
            <article className={this.state.componentDefinitions}>
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