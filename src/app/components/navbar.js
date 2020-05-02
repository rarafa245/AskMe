import React from 'react'
import { Link } from 'react-router'

class NavBar extends React.Component{
    /* Creating a General Navegation Bar Component.
        :parram - home: Boolean indicating if the Navegation Bar 
                        is for Home Page or Logging Page
    */

    constructor(){
        super()
        this.state = {
            home: {
                mode: true,
                links: ['Account', 'Logout'],
                route: ['#', '/logout'],
            },
            login: {
                mode: false,
                links: ['About', 'Contact Me!'],
                route: ['#', '#']
            }
        }
    }

    navBarLinks(){
        if (this.props.home === this.state.home.mode){
            //If the mode is Home, return the links fro home

            const tagLinks = this.state.home.links.map(
                (element, index) => <NavBarContent key={index} 
                                                    content={element} 
                                                    route={this.state.home.route[index]}/>
                )
            return tagLinks
        }else{
            //If the mode isn´t Home, return the links fro Logging

            const tagLinks = this.state.login.links.map(
                (element, index) => <NavBarContent key={index} 
                                                    content={element} 
                                                    route={this.state.login.route[index]}/>
                )
            return tagLinks
        }
    }

    render(){
        
        const iconLink = (this.props.home) ? '/home' : '/'

        const tagLinks = this.navBarLinks()


        return(
            <DefaultNavBar iconLink={iconLink}>
                {tagLinks}
            </DefaultNavBar>
        )
    }
}


function DefaultNavBar(props){
    /* Creating the Basic Template for the Navegation Bar 
        :parram - Children Component: Place reserved for adding links <li> 
        :return - Navegation Bar template
    */


    return(
        <div>
            <nav className="navbar navbar-expand navbar-light bg-steel">
                <Link className="navbar-brand text-white" href={props.iconLink}>Ask Me!</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {props.children}
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}

function NavBarContent(props){
    /* Generating HTML Navegation Bar links
        :parram: content - Name of the new Link
        :return: Navegation Bar link
    */


    return(
        <li className="nav-item active">
            <Link className="nav-link text-white" href={props.route}>{props.content}<span className="sr-only">(current)</span></Link>
        </li>
    )
}


export default NavBar