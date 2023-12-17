import React, { useEffect, useReducer } from "react";
import { reducer } from "../Components/reducer/reducer";
import { initialState } from "./../Components/initialState/initialState";
export const TaskContext = React.createContext({});

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action Creator Functions
  function addTaskAction(newObj) {
    dispatch({ type: "ADD_TASK", payload: newObj });
  }
  function deleteTaskAction(id) {
    dispatch({ type: "DELETE_TASK", payload: id });
  }

  // store task for localStorage

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  // create object multiple value
  const values = {
    state,
    dispatch,
    addTaskAction,
    deleteTaskAction,
  };
  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};
