import React from 'react';
import"./Project.css"
export  const Project =(props)=>{

    return(
    <div className='card-container'>
        <h2 > {props.project.name}</h2>
        <p>{props.project.username}</p>
        <div> 
        <div className='footer'></div>
        <button id='cancelBtn'>Remove</button>
        <button>Update</button>
        </div>
       
    </div>)
    

} 