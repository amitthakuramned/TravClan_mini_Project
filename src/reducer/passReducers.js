const initialData = {
  list: [],
};

const passReducers = (state = initialData, action) => {
  console.log(initialData);
  switch (action.type) {
    case "PASS_DATA":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_DATA":
      const newList = state.list.filter((elem) => elem.id != action.id);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};
export default passReducers;
