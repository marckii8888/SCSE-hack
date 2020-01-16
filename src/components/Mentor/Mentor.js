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
          <h1>CONNECT WITH YOUR MENTOR</h1>
          <p>
            Have any questions about your course? Approach your personal tutor
            and get your doubts clarified. Your question will be emailed to your
            respective tutor's email.
          </p>
          <h2 onClick={this.props.fx}>Connect now</h2>
        </div>
      </div>
    );
  }
}

export default Mentor;
