import PropTypes from "prop-types";
import Tasks from "./Tasks.jsx";
import Button from "./Button.jsx";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex flex-col w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
      <header className="border-b border-gray-300 pb-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            {project.title}
          </h1>
          <Button
            className="text-red-600 hover:text-red-700"
            onClick={onDelete}
          >
            Delete Project
          </Button>
        </div>
        <p className="text-gray-600 mb-2">{formattedDate}</p>
        <p className="text-gray-700">{project.description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}

// PropTypes for validation
SelectedProject.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
