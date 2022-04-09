import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css";
import { ProjectList } from './components/ProjectList/ProjectList.jsx';
import { Search } from './components/Search/Search.jsx';
import { Popup } from './components/Popup/Popup.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      project:[],
      searchfield:'',
      modalOpen:false
      
    }
    this.getProject=this.getProject.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
    this.onChangeDesc=this.onChangeDesc.bind(this)
    this.onChangeName=this.onChangeName.bind(this)
    this.handelClick=this.handelClick.bind(this)
  }

  getProject(){
    $.ajax({
      url: '/api/project/', 
      success: (data) => {
        this.setState({
          project: data
          
        })
        console.log(this.state.project);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  handleDelete (id){
    $.ajax({
      url: `/api/project/deleteProject/${id}`,
      method:'DELETE',
      success: (data) => {
        console.log(data, "data");
        this.getProject()
      },
      error: (err) => {
        console.log("err", err);
      },
    });
  };
  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(Response=>Response.json())
    // .then(console.log(Response))
    // .then(users =>this.setState({project : users}))
    this.getProject()
  }
  
   setOpenModel(value){
      this.setState({
        modalOpen:value})
   }

   onChangeDesc(event){
    this.setState({
        description: event.target.value
    }
    )
}
  onChangeName(event){
    this.setState({
        name : event.target.value
    }
    )
}
handelClick(){
    
  $.post('/api/project/postProject',{name:this.state.name,description:this.state.description})
  .then(()=>{
      this.setState({
          name:'',
          description:''

      })
      this.getProject()
     
  
  })
  .then(()=>{
    this.setOpenModel(false)
  })
  
  

}
  render () {
    const {project,searchfield}=this.state;
    const filterProject=project.filter(project=>
      project.name.toLowerCase().includes(searchfield.toLocaleLowerCase()))
    return (
    <div>
      <div className='App'>
        
        <h1 >Bug_Tracker</h1>

        <Search
        placeholder='Search Project'
        handelChange={e=>this.setState({searchfield:e.target.value })}
        />
        <button className='openModelbtn' onClick={()=>this.setOpenModel(true)}  >ADD Project</button>
          
        
        <div className='list'> <ProjectList project={filterProject} handleDelete={this.handleDelete}/></div>
         {this.state.modalOpen && <div className='modalBackground'>
          <div className='modalContainer'>
              <div className='titleCloseBtn'>
                  <button onClick={()=>{
                      this.setOpenModel(false)
                  }}>
                      x
                  </button>
              </div>
              <div className='title'>
                  <h1>Add New Project</h1>
              </div>
              <div className='body'>
                  <input placeholder='Name Of Project' value={this.state.name} onChange={this.onChangeName}></input>
                  <input placeholder='description Of Project'value={this.state.description} onChange={this.onChangeDesc}></input>
              </div>
              <div className='footer'>
                  <button id='cancelBtn' onClick={()=>{
                      this.setOpenModel(false)
                  }} >Cancel</button>
                  <button onClick={this.handelClick}>ADD</button>
              </div>
          </div>
      </div>} 
      </div>
     
    

    </div>)
  }
}
ReactDOM.render(<App />, document.getElementById('app'));