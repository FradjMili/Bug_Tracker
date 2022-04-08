import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css";
import { ProjectList } from './components/ProjectList/ProjectList.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addModelShow:false,
      project:[],
      searchfield:''
    }
  }



  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(console.log(Response))
    .then(users =>this.setState({project : users}))
  }
  
    // renderView() {
    //   if (this.state.addModelShow === true) {
    //     return (
    //       <Model  />
    //     );
    //   }
   //: onClick={()=>this.setState({addModelShow:true})}
    // }


  render () {
    return (
    <div>
      <div className='App'>
        
        <h1>Bug_Tracker</h1>
        <input type='search' placeholder='Search Project' onChange={e=>this.setState({searchfield:e.target.value })}/>
        <button className='openModelbtn' >ADD Project</button>
        <div className='list'> <ProjectList project={this.state.project}/></div>
      </div>
     
    

        
     
     
      
      
    </div>)
  }
}
ReactDOM.render(<App />, document.getElementById('app'));