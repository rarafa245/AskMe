import React from 'react'
import {Link} from 'react-router-dom'


class InfoCard extends React.Component{

    constructor(){
        super()
        this.state = {
            home: {
                mode: 'home',
                size: 'mt-2 col-lg-4',
                links: ['Messages', 'Account', 'Logout'],
                route: ['#', '#', '/logout'],
            },
            login: {
                mode: 'login',
                size: 'mt-lg-5 col-lg-4',
                links: ['Create a New Account', 'Forgot Account?'],
                route: ['/register', '#']
            },
            register: {
                mode: 'register',
                size: 'mt-lg-5 col-lg-4',
                links: ['Create a New Account', 'About', 'Contact Me!'],
                route: ['/register', '#', '#']
            },
        }
    }

    componentDidMount(){
        if (this.props.mode === this.state.home.mode){
            this.setState({ size: this.state.home.size})
        }
        if (this.props.mode === this.state.login.mode){
            this.setState({ size: this.state.login.size})
        }
        if (this.props.mode === this.state.register.mode){
            this.setState({ size: this.state.register.size})
        }
    }

    createCardLinks(){

        if (this.props.mode === this.state.home.mode){

            const tagLinks = this.state.home.links.map(
                (element, index) => <CardLink key={index} 
                                                    content={element} 
                                                    route={this.state.home.route[index]}/>
                )

            return tagLinks
        }

        if (this.props.mode === this.state.login.mode){

            const tagLinks = this.state.login.links.map(
                (element, index) => <CardLink key={index} 
                                                    content={element} 
                                                    route={this.state.login.route[index]}/>
                )

            return tagLinks
        }

        if (this.props.mode === this.state.register.mode){

            const tagLinks = this.state.register.links.map(
                (element, index) => <CardLink key={index} 
                                                    content={element} 
                                                    route={this.state.register.route[index]}/>
                )

            return tagLinks
        }
       
    }


    render(){

        const tagLinks = this.createCardLinks()

        return(
            <CardStructure title={this.props.title} subtitle={this.props.subtitle}
                            message={this.props.message} size={this.state.size}>
                {tagLinks}
            </CardStructure>
            
        )
    }
}


function CardStructure(props){

    return(
        <div className={props.size}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">{props.subtitle}</h6>
                    <p className="card-text text-center">
                        {props.message}
                    </p>
                    <ul className="list-group">
                        {props.children}
                    </ul>
                </div>
            </div>
        </div>
    )
}


function CardLink(props){
    return (
        <li className="list-group-item text-center">
            <Link to={props.route}>{props.content}</Link>
        </li>
    )
}

export default InfoCard