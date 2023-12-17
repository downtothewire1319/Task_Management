import TaskItem from "../Task_Item/TaskItem";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
import taskIcon from "../../assets/images/empty.png";
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
        <img
          width="200px"
          style={{ marginTop: "20px" }}
          src={taskIcon}
          alt=""
        />
      </div>
    )),
  };
};

export default TaskList;
