import { MdDelete } from "react-icons/md";
import { useContext, useRef, useState } from "react";
import { TaskContext } from "../../Context/TaskContext";
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

const TaskItem = ({ taskData, index }) => {
  // update input form start
  const [inputVal, setInputVal] = useState("");
  const [inputId, setInputId] = useState(0);

  // update input form end

  const [isUpdate, setIsUpdate] = useState(false);
  const { state, deleteTaskAction } = useContext(TaskContext);
  const { taskText, id } = taskData;
  const doneTask = useRef();
  // delete task
  const handleTaskDelete = (id) => {
    deleteTaskAction(id);
  };
  // done task
  const handleMark = () => {
    doneTask.current.classList.toggle("doneTask");
  };

  // get task
  const getTask = (getId, index) => {
    const findDataObj = state.tasks.find((task) => task.id === getId);

    setInputVal(findDataObj.taskText);
    setIsUpdate(true);
    setInputId(index);
  };
  // update task
  const handleUpdateTask = () => {
    setIsUpdate(false);

    state.tasks[inputId].taskText = inputVal;
  };

  return (
    <div>
      <div className="taskItem">
        <div>
          {isUpdate ? (
            <div>
              <label>Update Task:</label>
              <input
                autoFocus
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                type="text"
              />
            </div>
          ) : (
            <div className="checkboxAndContent">
              <input
                onClick={() => handleMark(id)}
                type="checkbox"
                title="Done Task"
                id="doneTask"
              />
              <h3 ref={doneTask}>{taskText}</h3>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={isUpdate ? handleUpdateTask : () => getTask(id, index)}
            title="Update Task"
            id="update"
          >
            {isUpdate ? (
              <FaSave type="submit" title="Update Task" />
            ) : (
              <FaEdit title="Edit Task" />
            )}
          </button>
          <button
            className={isUpdate ? "hideDeleteBtn" : "showDeleteBtn"}
            onClick={() => handleTaskDelete(id)}
            title="Remove Task"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
