import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './views/loginPage'
import Home from './views/homePage'
import Register from './views/register'
import QuestionPage from './views/questionPage'
import SingleQuestionPage from './views/singleQuestionPage'
import UserQuestions from './views/userQuestions'
import LogOut from './views/logout'


function App() {

    return(
        <Router>
            <Switch>
                <Route exact path={'/'} component={Login}/>
                <Route exact path={'/register'} component={Register}/>
                <Route exact path={'/:username/:id'} component={SingleQuestionPage}/>
                <PrivateRoute exact path={'/home'} component={Home}/>
                <PrivateRoute exact path={'/logout'} component={LogOut}/>
                <PrivateRoute exact path={'/questions'} component={QuestionPage}/>
                <PrivateRoute exact path={'/allquestions'} component={UserQuestions}/>
            </Switch>
        </Router>
    )
    
}


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} 
        render = { props => (
            (localStorage.getItem('AWT')) ? (<Component {...props} />) : (props.history.push('/'))
        )}
    />
)

function loadPage(props) {

    axios.get("http://localhost:5000/refresh", {
        headers: {
            'Authorization': localStorage.getItem('AWT'),
            'UID': localStorage.getItem('UID')
        }
    })
    .then(res => { 
        if (res.data.status){
        localStorage.setItem('AWT', res.data.token)
        }
    })
    .catch(error => {
        alert('Session Expired! Timeout!')
        props.history.push("/")
        
    })
}

export {
    App,
    loadPage
}