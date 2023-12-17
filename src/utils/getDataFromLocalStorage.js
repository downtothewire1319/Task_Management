export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("tasks");

  return data ? JSON.parse(data) : [];
};
