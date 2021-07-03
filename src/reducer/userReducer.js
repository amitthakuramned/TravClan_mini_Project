import { createReducer, createSlice } from "@reduxjs/toolkit";

const initialstate = {
  name: "ramesh",
  age: "20",
  status: "coder",
};

// export default (state = initialstate, action) => {
//   if (action.type === "UPDATE_AGE") {
//     return {
//       ...state,
//       age: action.payload,
//     };
//   }
//   return state;
// };

export default createReducer(initialstate, (builder) => {
  builder.addCase("UPDATE_AGE", (state, action) => {
    state.age = action.payload;
  });
  builder.addCase("UPDATE_NAME", (state, action) => {
    state.name = action.payload;
  });
  builder.addCase("UPDATE_CODER", (state, action) => {
    state.status = action.payload;
  });
});
