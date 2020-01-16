import React, { Component } from "react";
import "./courses.css";

class courses extends Component {
  state = {};
  render() {
    const { course } = this.props;
    return (
      <div className="courses">
        <h2>
          <a href={course.url} target="_blank">
            {course.name}
          </a>
        </h2>
      </div>
    );
  }
}

export default courses;
