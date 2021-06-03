import React from "react";
import { Navbar, Link, Nav } from "react-bootstrap";
import "../assets/style.scss";
import Logo from "../assets/insta.jpg";

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img src={Logo} />
            Instagram
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
export default Header;
