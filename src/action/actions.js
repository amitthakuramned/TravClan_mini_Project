// export default (status) => {
//   return {
//     type: "UPDATE_CODER",
//     payload: status,
//   };
// };
import { createAction } from "@reduxjs/toolkit";

export const changestatus = createAction("UPDATE_CODER");

export const fetchname = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    dispatch({ type: "UPDATE_NAME", payload: result[0].name });
  };
};
