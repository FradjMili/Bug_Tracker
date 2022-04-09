
import React from 'react'
import './Popup.css'

export const  Popup = (props) => {
    console.log(props);
    return (
        
      <div className='modalBackground'>
          <div className='modalContainer'>
              <div className='titleCloseBtn'>
                  <button onClick={()=>{
                      props.setOpenModel(false)
                  }}>
                      x
                  </button>
              </div>
              <div className='title'>
                  <h1>Add New Project</h1>
              </div>
              <div className='body'>
                  <p>describe our project</p>
              </div>
              <div className='footer'>
                  <button id='cancelBtn' onClick={()=>{
                      props.setOpenModel(false)
                  }} >Cancel</button>
                  <button >ADD</button>
              </div>
          </div>
      </div>
    )
  
}
