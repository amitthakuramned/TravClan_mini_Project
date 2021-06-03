import React from "react";
import { Button } from "react-bootstrap";
import "../assets/Header.css";
import Logo from "../assets/Instafoter.jpg";

class Footer extends React.Component {
  render() {
    return (
      <>
        <nav className="footer">
          <div className="Nav-menus">
            <div className="Nav-brand-logo">
              {" "}
              <img src={Logo} />
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Footer;
