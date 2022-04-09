import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css";
import { ProjectList } from './components/ProjectList/ProjectList.jsx';
import { Search } from './components/Search/Search.jsx';
// import { Popup } from './components/Popup/Popup.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     // setModelOpen:false,
      project:[],
      searchfield:''
      
    }
    this.getProject=this.getProject.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
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
        <button className='openModelbtn'  >ADD Project</button>
        
        <div className='list'> <ProjectList project={filterProject} handleDelete={this.handleDelete}/></div>
      </div>
     
    

    </div>)
  }
}
ReactDOM.render(<App />, document.getElementById('app'));