import React, { useState } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { axiosRemoveQuestion } from '../../Services'



const QuestionCard = (props) =>{

    const current_user = localStorage.getItem('UID')
    const questionID = props.id
    const questionTitle = props.title

    return (
        <div className="mt-2 mb-2 p-1">
            <div className="card">

                <QuestionContent    questionID={questionID}
                                    questionTitle={questionTitle}
                                    current_user={current_user}/>

                <div className="card-body cardheight">
                    <p className="card-text question-content truncate">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

const QuestionContent = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    return (
        <div className="card-header bg-steel py-0">
            <div className='row'>
                <div className='col-10 p-2'>
                    <Link to={`/${props.current_user}/${props.questionID}`}>
                        <h6 className="text-white truncate">
                            {props.questionTitle}
                        </h6>
                    </Link>
                </div>
                <div className='col-2'>
                    <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="nav-link" caret></DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem >Edit</DropdownItem>
                            <DropdownItem onClick={() => axiosRemoveQuestion(props.questionID)}>Delete</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </div>
        </div>
    );
  }
  

export default QuestionCard