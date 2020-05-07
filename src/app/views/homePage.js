import React from 'react'
import LeftSideBar from '../components/homeComponents/leftSideBar'
import UserCard from '../components/homeComponents/userCard'
import HomeNav from '../components/homeComponents/homeNav'
import ManageContactsSide from '../components/homeComponents/manageContactsSide'
import QuestionCard from '../components/homeComponents/questionCard'


class Home extends React.Component{
    constructor(){
        super()
        this.state={
            userImage: "",
            questions: "" 
        }
    }
    
    componentDidMount(){
        localStorage.setItem('LPC', this.props.location.pathname)
        localStorage.setItem('AWTST', 'true')

        fetch("http://192.168.0.23:5000/userQuestions",{
            method: "GET",
            headers: new Headers({
                'Authorization': localStorage.getItem('AWT'),
                'UID': localStorage.getItem('UID')
            })
        })
        .then(res => res.json())
        .then(res => {
            let receivedData, index
            let total_question = []
            receivedData = JSON.parse(res.message)

            console.log(res)

            for (index in receivedData){


                total_question.push(
                            <QuestionCard   key = {index}
                                            introduction={index}
                                            datePosted={receivedData[index].date_posted}
                                            title={receivedData[index].title}
                                            content={receivedData[index].content}/>)
            }

            this.setState({ questions: total_question })

        
        })
    }

    render(){
        return(
            <div>
                <header>
                    <HomeNav />
                </header>
                <div className="container-fluid">
                    <div className="row">
                        <LeftSideBar />
                        <UserCard />
                        <ManageContactsSide />
                    </div>
                    {this.state.questions}
                </div>
            </div>
        )
    }
}

export default Home