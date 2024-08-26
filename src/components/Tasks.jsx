import NewTask from "./NewTask.jsx";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 ? (
        <p className="text-gray-600 mt-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="mt-4 bg-gray-100 p-4 rounded-md">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center py-2 border-b border-gray-300"
            >
              <span className="text-gray-700">{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-red-600 hover:text-red-700"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
