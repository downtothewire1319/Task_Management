import { useState, useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

const AddTask = () => {
  const { addTaskAction } = useContext(TaskContext);
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newObj = {
      id: new Date().getTime(),
      taskText: inputText,
    };
    addTaskAction(newObj);
    setInputText("");
  };
  return (
    <div className="addTask">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTask">Enter Task Name:</label>
        <input
          required
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          type="text"
          name="newTask"
          id="newTask"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
