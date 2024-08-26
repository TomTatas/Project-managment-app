import { useState } from "react";
import Button from "./Button.jsx";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
    setError("");
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      setError("Task cannot be empty");
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
    setError("");
  }

  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          className={`flex-1 px-4 py-2 bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md ${
            error ? "border-red-500" : ""
          }`}
          onChange={handleChange}
          value={enteredTask}
          placeholder="Enter a new task"
        />
        <Button className="flex-shrink-0" onClick={handleClick}>
          Add Task
        </Button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
