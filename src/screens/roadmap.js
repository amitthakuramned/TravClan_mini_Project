import React, { useState, useEffect, createContext } from "react";
import { Button, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import Card from "../components/card";
import "../assets/style.scss";

class Roadmap extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="col-md-12">
            <Row>
              <div className="col-md-4">
                <Card
                  cardheader="Rewrite Query Caching Logic"
                  img1="/assets/img/men-1.png"
                  cardbodydataA="simon last"
                  cardbodydataB="briyan park"
                  img2="/assets/img/men-1.png"
                  footerdataA="Task"
                  footerdataB="sprint22"
                />
              </div>
              <div className="col-md-4">
                {" "}
                <Card
                  cardheader="Rewrite Query Caching Logic"
                  img1="/assets/img/men-1.png"
                  cardbodydataA="simon last"
                  cardbodydataB="briyan park"
                  img2="/assets/img/men-1.png"
                  footerdataA="Task"
                  footerdataB="sprint22"
                />
              </div>
              <div className="col-md-4">
                {" "}
                <Card
                  cardheader="Rewrite Query Caching Logic"
                  img1="/assets/img/men-1.png"
                  cardbodydataA="simon last"
                  cardbodydataB="briyan park"
                  img2="/assets/img/men-1.png"
                  footerdataA="Task"
                  footerdataB="sprint22"
                />
              </div>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
export default Roadmap;
