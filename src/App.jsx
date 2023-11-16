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
  return (
    <main className="h-screen my-8 flex gap-8" >
      <ProjectSidebar onStartAddProject={handleStartAddProject}/>
      <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    </main>
  );
}

export default App;
