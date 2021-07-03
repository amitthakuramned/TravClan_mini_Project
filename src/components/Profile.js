import react from "react";
import { useSelector, useDispatch } from "react-redux";
import { changestatus, fetchname } from "../action/actions";

function Profile() {
  const { name, age, status } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const updateage = (age) => {
    dispatch({
      type: "UPDATE_AGE",
      payload: age,
    });
  };
  const updatename = async () => {
    dispatch(fetchname());
  };
  const updatestatus = (status) => {
    dispatch(changestatus(status));
  };
  return (
    <div>
      <h1>your profile component</h1>
      <h2>my name is {name}</h2>
      <h2>my age is {age}</h2>
      <h2>my status is {status}</h2>
      <button onClick={() => updateage(40)}>update age</button>
      <button onClick={() => updatename()}>update name</button>
      <button onClick={() => updatestatus("driver")}>update staus</button>
    </div>
  );
}

export default Profile;
