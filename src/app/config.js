import React from 'react'
import {Router, 
        Route, 
        browserHistory} from 'react-router'
import Login from './views/loginPage'
import Home from './views/homePage'

class App extends React.Component{

    render(){
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={Login}/>
                <Route path={'/home'} component={Home}/>
            </Router>
        )
    }
}

export default App