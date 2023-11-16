import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "../src/components/NewProject"

function App() {
  return (
    <main className="h-screen my-8">
      <ProjectSidebar/>
      <NewProject/>
    </main>
  );
}

export default App;
