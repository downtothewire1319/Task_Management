import AddTask from "../Components/AddTask/AddTask";
import TaskList from "../Components/Task_List/TaskList";
import { TaskProvider } from "../Context/TaskContext";

const Home = () => {
  return (
    <div className="taskWrapper">
      <TaskProvider>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </div>
  );
};

export default Home;
