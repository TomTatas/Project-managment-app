import noProjectImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-white rounded-lg shadow-lg">
      <img
        src={noProjectImage}
        alt="No projects"
        className="w-24 h-24 object-contain mb-4"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        No Project Selected
      </h2>
      <p className="text-gray-600 mb-4">Select a project or start a new one.</p>
      <Button onClick={onStartAddProject}>Create New Project</Button>
    </div>
  );
}
