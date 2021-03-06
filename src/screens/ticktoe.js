import React, { useState, useEffect, createContext } from "react";
import { Button, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import Card from "../components/card";
import "../assets/style.scss";
import { Game } from "../components/gamecomp";

class Ticktoe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="maincomp">
            <Game />
          </div>
        </div>
      </>
    );
  }
}
export default Ticktoe;
