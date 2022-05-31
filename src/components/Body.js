import React, { Component } from "react";
import Projects from "./Projects";



class Body extends Component {
  render() {
      const mainStyles = {
          textAlign:'center'
      }
    return (
      <main style={mainStyles}>
        <Projects />
      </main>
    );
  }
}

export default Body;
