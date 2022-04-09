import React from 'react';
import"./Project.css";



export  const Project =(props)=>{
   
    
    return(
        
    <div className='card-container' >
        
        <h2 > {props.project.name}</h2>
        <p>{props.project.description}</p>
        <div> 
        <div className='footer'></div>
        <button id='cancelBtn' onClick={()=>props.handleDelete(props.project._id)}>Remove</button>
        <button  onClick={()=>props.handelUpdate(props.project._id)}>Update</button>
        </div>
       
    </div>
    )
    

} 