import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { LoginPage,
         RegisterPage,
         HomePage,
         QuestionGeneral,
         QuestionsAll,
         SingleQuestion,
         LogoutPage } from './Pages'

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={LoginPage}/>
                <Route exact path={'/register'} component={RegisterPage}/>
                <Route exact path={'/:username/:id'} component={SingleQuestion}/>
                <PrivateRoute exact path={'/home'} component={HomePage}/>
                <PrivateRoute exact path={'/logout'} component={LogoutPage}/>
                <PrivateRoute exact path={'/questions'} component={QuestionGeneral}/>
                <PrivateRoute exact path={'/allquestions'} component={QuestionsAll}/>
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

export default App