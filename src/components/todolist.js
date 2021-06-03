import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../action/todoaction";
// import "../assets/style.scss";

function Todolist() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
  return (
    <div className="container">
      <div>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Add List</Form.Label>
          <Form.Control
            onChange={(event) => setInputData(event.target.value)}
            type="text"
            value={inputData}
            placeholder="Enter List"
          />
        </Form.Group>

        <Button
          onClick={() => dispatch(addTodo(inputData))}
          variant="primary"
          type="button"
        >
          Submit
        </Button>
      </div>
      {list.map((elem) => {
        return (
          <div key={elem.id}>
            <h4>{elem.data}</h4>
            <Button
              onClick={() => dispatch(deleteTodo(elem.id), setInputData(""))}
              variant="primary"
              type="button"
            >
              delete
            </Button>
          </div>
        );
      })}
    </div>
  );
}
export default Todolist;
