import React from 'react';
import './Search.css';

export  const Search =({placeholder,handelChange})=>{


    return(
    <input className='search' type='search' 
    placeholder={placeholder}
     onChange={handelChange}/>)
    
}