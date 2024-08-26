import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import Button from "./Button.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      !enteredTitle.trim() ||
      !enteredDescription.trim() ||
      !enteredDueDate.trim()
    ) {
      if (modal.current) modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });

    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }

  function handleCancel() {
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
    onCancel();
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-semibold text-gray-800">Invalid Input</h2>
        <p className="text-gray-600">
          Please make sure you provide a value for every input field.
        </p>
      </Modal>
      <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-end gap-4 mb-6">
          <Button
            className="bg-gray-300 text-gray-700 hover:bg-gray-400"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </>
  );
}
