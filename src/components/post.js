import React, { Component } from "react";
import "../assets/Header.css";
import {} from "react-bootstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div>
          <div className="post">
            <div className="card">
              <div className="card-header">
                <span>
                  <img src={this.props.userimg} alt="user" />
                </span>
                <span>{this.props.name}</span>
              </div>
              <div className="card-body">
                {(this.props.post == null) | (this.props.video == "") ? (
                  <video
                    style={{ maxWidth: "450px", width: "100%" }}
                    height="340"
                    controls
                  >
                    <source src={this.props.video} type="video/mp4" />
                  </video>
                ) : (
                  <img src={this.props.post} alt="post" />
                )}
              </div>
              <div className="card-footer">{this.props.footer}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
