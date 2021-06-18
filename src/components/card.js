import React, { Component } from "react";
import "../assets/Header.css";
import {} from "react-bootstrap";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="card">
          <div className="card-header">{this.props.cardheader}</div>
          <div className="card-body">
            <p>
              <span>
                <img src={this.props.img1} />
              </span>
              {this.props.cardbodydataA}
            </p>
            <p>
              <span>
                {" "}
                <span>
                  <img src={this.props.img2} />
                </span>
              </span>
              {this.props.cardbodydataB}
            </p>
          </div>
          <div className="card-footer">
            <p>{this.props.footerdataA}</p>
            <p>{this.props.footerdataB}</p>
          </div>
        </div>
      </>
    );
  }
}
export default Card;
