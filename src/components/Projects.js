import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div>
          <h1>Projects</h1>
        <h3>Snitcher</h3>
        <a
          href="https://whispering-hamlet-11552.herokuapp.com/"
          style={{ textDecoration: "none" }}
        >
          Go to Snitcher{" "}
          <i className="fas fa-external-link-alt" aria-hidden="true"></i>
        </a>
      </div>
    );
  }
}

export default Projects;
