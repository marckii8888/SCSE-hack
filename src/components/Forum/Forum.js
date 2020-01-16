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
          <h2>
            <a
              href="https://wastedpotnetial.discussion.community"
              target="_blank"
            >
              Go to Forum
            </a>
          </h2>
        </div>
      </div>
    );
  }
}

export default Forum;
