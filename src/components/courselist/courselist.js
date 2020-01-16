import React, { Component } from "react";
import Courses from "../courses/courses";
import "./courselist.css";

class courselist extends Component {
  state = {};
  render() {
    return (     
        <div className="courselist-container">
        <h1>COURSE MATERIALS</h1>
        <p>Click on the year of the mod you wanna see :)</p>
        <div className="courselist">
          {this.props.courses.map(course => {
            return <Courses course={course} />;
          })}
        </div>
        </div>
    );
  }
}

export default courselist;
