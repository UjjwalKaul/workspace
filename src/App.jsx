import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "../src/components/NewProject"
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const[projectsState,setProjectsState]=useState({
    selectedProjectId:undefined,
    projects:[]
  });

  function handleStartAddProject(){
    setProjectsState((prevState)=>{return {...prevState,selectedProjectId:null}})
  }
<<<<<<< HEAD
  
  function handleAddProject(projectData){
    setProjectsState((prevState)=>{
      const newProject={
        ...projectData,
        id:Math.random()
      };  
      return {...prevState,selectedProjectId:undefined,projects:[...prevState.projects,newProject]}
    })
  }
  
  let content;
  if(projectsState.selectedProjectId===null){
    content=<NewProject onAdd={handleAddProject}/>
=======

  let content;
  if(projectsState.selectedProjectId===null){
    content=<NewProject/>
>>>>>>> 0f8ec382e1712d9f0d19a1400e21182a17c4a37e
  }
  else if(projectsState.selectedProjectId===undefined){
    content=<NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
<<<<<<< HEAD

=======
>>>>>>> 0f8ec382e1712d9f0d19a1400e21182a17c4a37e
  return (
    <main className="h-screen my-8 flex gap-8" >
      <ProjectSidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
