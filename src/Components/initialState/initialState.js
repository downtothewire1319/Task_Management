import { getDataFromLocalStorage } from "../../utils/getDataFromLocalStorage";
export const initialState = {
  tasks: getDataFromLocalStorage(),
  modalText: "",
  isModalOpen: false,
};
