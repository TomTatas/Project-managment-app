import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleAppProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    setProjectsState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
    }));
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      // Filter out the selected project and its associated tasks
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      );
      const updatedTasks = prevState.tasks.filter(
        (task) => task.projectId !== prevState.selectedProjectId
      );

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
        tasks: updatedTasks,
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAppProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (selectedProject) {
    const projectTasks = projectsState.tasks.filter(
      (task) => task.projectId === selectedProject.id
    );

    content = (
      <SelectedProject
        project={selectedProject}
        tasks={projectTasks}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onDelete={handleDeleteProject} // Ensure onDelete is passed correctly
      />
    );
  }

  return (
    <main className="flex h-screen">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      <div className="flex-1 p-8 bg-gray-100">{content}</div>
    </main>
  );
}

export default App;
