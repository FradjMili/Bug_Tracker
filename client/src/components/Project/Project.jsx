import React from 'react';
import"./Project.css"
import { ErrorList } from '../ErrorList/Error.jsx';
import { useHistory } from "react-router-dom";
export  const Project =(props)=>{
    const history = useHistory();
    const navigateTo = () => history.push('./ErrorList/ErrorList.jsx')
    return(
    <div className='card-container' onClick={navigateTo} >
        <h2 > {props.project.name}</h2>
        <p>{props.project.description}</p>
        <div> 
        <div className='footer'></div>
        <button id='cancelBtn' onClick={()=>props.handleDelete(props.project._id)}>Remove</button>
        <button>Update</button>
        </div>
       
    </div>)
    

} 