import React, { Component } from "react";
import "./Forum.css";

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="forum-container">
        <div className="image-container">
          <img src="./Banner.jpg" alt="" />
        </div>
        <div className="hero-text">
          <h1>FORUM</h1>
          <p>
            WastedPotnetial is a forum for students to clarify their doubts with
            other students.
          </p>
          <a
              href="https://wastedpotnetial.discussion.community/?forum=773874"
              target="_blank"
            >
          <h2>
              Go to Forum
          </h2>
          </a>
        </div>
      </div>
    );
  }
}

export default Forum;
