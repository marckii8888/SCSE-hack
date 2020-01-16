import React, { Component } from "react";
import "./courses.css";

class courses extends Component {
  state = {};
  render() {
    const { course } = this.props;
    return (
      <div className="courses">
        <a  href={course.url} target="_blank">
        <h2>
            {course.name}
        </h2>
        </a>
      </div>
    );
  }
}

export default courses;
