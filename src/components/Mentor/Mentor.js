import React, { Component } from "react";
import "./Mentor.css";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(fullpageApi) {
    return (
      <div className="mentor">
        <div className="mentor-text">
          <h1>CONTACT YOUR TUTOR</h1>
          <p>
            Do you have any questions about your course? <br/>Contact your tutor
            and get your doubts clarified.
          </p>
          <h2 onClick={this.props.fx}>Contact now</h2>
        </div>
      </div>
    );
  }
}

export default Mentor;
