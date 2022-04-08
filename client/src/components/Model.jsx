
import React, { Component } from 'react'
import './Model.css'

export default class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
          
        }
        
      }


  render() {
    return (
        
      <div className='modalBackground'>
          <div className='modalContainer'>
              <div className='titleCloseBtn'>
                  <button>
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
                  <button id='cancelBtn' >Cancel</button>
                  <button >ADD</button>
              </div>
          </div>
      </div>
    )
  }
}
