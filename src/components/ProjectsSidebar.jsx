import Button from "./Button.jsx";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-80 p-6 bg-gray-800 text-white rounded-r-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-6">Your Projects</h2>
      <Button className="w-full mb-6">+ Add Project</Button>
      <ul>
        {projects.map((project) => {
          const isSelected = project.id === selectedProjectId;
          return (
            <li key={project.id}>
              <button
                className={`block w-full text-left px-4 py-2 rounded-md mb-2 ${
                  isSelected
                    ? "bg-blue-700 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
