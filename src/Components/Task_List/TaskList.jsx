import TaskItem from "../Task_Item/TaskItem";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
const TaskList = () => {
  const { state } = useContext(TaskContext);
  const { isModalOpen, tasks } = state;
  return {
    ...(state.tasks.length > 0 ? (
      <div className="taskList">
        {isModalOpen && <Modal modalText={state.modalText} />}
        {tasks.map((taskData, index) => (
          <TaskItem key={taskData.id} index={index} taskData={taskData} />
        ))}
      </div>
    ) : (
      <div>
        <h2>No Task Added Yet!</h2>
        
      </div>
    )),
  };
};

export default TaskList;
