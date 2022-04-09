import React from "react";
import './ProjectList.css';
import { Project } from "../Project/Project.jsx";

export const ProjectList =props =>{
    console.log(props);
return (
    <div className='ProjectList'>
         {props.project.map(project=>(
        <Project  key={project.id} project={project} handleDelete={props.handleDelete} />
      ))}</div>
)
}