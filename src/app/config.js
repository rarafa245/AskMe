import React from 'react'
import {Router, 
        Route, 
        browserHistory} from 'react-router'
import Login from './views/loginPage'
import Home from './views/homePage'
import Register from './views/register'

class App extends React.Component{

    render(){
        return(
            <Router history={browserHistory}>
                <Route exact path={'/'} component={Login}/>
                <Route exact path={'/home'} component={Home}/>
                <Route exact path={'/register'} component={Register}/>
            </Router>
        )
    }
}

const protectedRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} 
                render={
                        (props) => {
                            if(props.location.state.token) return <Component {...props} />
                            else return <h1>NAAAAAO</h1>
                        }}
        />
    )
}


export {
    App, 
    protectedRoute
}