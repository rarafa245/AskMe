import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



const QuestionCard = (props) =>{

    const current_user = localStorage.getItem('UID')

    return(
        <div className="mt-2 mb-2 p-1">
            <div className="card">

                <Example    title={props.title} 
                            current_user={current_user}
                            id={props.id}/>

                <div className="card-body cardheight">
                    <p className="card-text question-content truncate">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

const Example = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    return (
        <div class="card-header bg-steel py-0">
            <div className='row'>
                <div className='col-10 p-2'>
                    <Link to={`/${props.current_user}/${props.id}`}><h6 className="text-white truncate">{props.title}</h6></Link>
                </div>
                <div className='col-2'>
                    <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="nav-link" caret></DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem tag="a">Edit</DropdownItem>
                            <DropdownItem tag="a">Exclude</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </div>
        </div>
    );
  }
  

export default QuestionCard