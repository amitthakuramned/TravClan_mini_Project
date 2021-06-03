export const passData = (data) => {
  return {
    type: "PASS_DATA",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const passdeleteTodo = (id) => {
  return {
    type: "DELETE_DATA",
    id,
  };
};
