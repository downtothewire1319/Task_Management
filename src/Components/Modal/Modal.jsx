import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../Context/TaskContext";

const Modal = ({ modalText }) => {
  const { state } = useContext(TaskContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);
  }, [state.tasks]);

  return (
    <>
      <p className={isModalOpen ? "isModalOpen" : "isModalClose"}>
        {modalText}
      </p>
    </>
  );
};

export default Modal;
