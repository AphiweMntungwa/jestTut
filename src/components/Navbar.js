import React, { Component } from "react";
import aphiweMntungwa from "../assets/aphiweMntungwa.jpg";

class Navbar extends Component {
  render() {
    const links = [
      { id: 1, name: "About" },
      { id: 2, name: "Skills" },
      { id: 3, name: "Projects" },
    ];

    const UlStyle = {
      height: "100%",
    };
    const divStyle = {
      height: "20vh",
      backgroundColor: "#000c18",
    };
    const buttonStyle = {
      height: "100%",
      color:'#917744'
    };
    const imgStyle = {
      width: "115px",
      height: "115px",
      borderRadius: "50%",
      margin: "7px 14px",
    };

    return (
      <div style={divStyle}>
        <ul className="nav nav-tabs" id="myTab" role="tablist" style={UlStyle}>
          <img
            src={
              "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            }
            style={imgStyle}
            alt=""
          />
          {links.map((link) => {
            return (
              <li className="nav-item" role="presentation" key={link.id}>
                <button
                  className="nav-link"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  style={buttonStyle}
                >
                  {link.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Navbar;
