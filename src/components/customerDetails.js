import React from "react";
import { UserData } from "../components/table";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import "../assets/style.scss";

function Customer() {
  const list = useSelector((state) => state.passReducers.list);
  console.log(list);
  return (
    <>
      <>
        <Table>
          <tbody>
            <tr>
              <td>test 1</td>
              <td>test 2</td>
              <td>test 3</td>
            </tr>
            {list.map((elem) => {
              return (
                <tr>
                  <td>{elem.data.id}</td>
                  <td>{elem.data.firstname}</td>
                  <td>{elem.data.lastname}</td>
                  <td>{elem.data.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    </>
  );
}

export default Customer;
