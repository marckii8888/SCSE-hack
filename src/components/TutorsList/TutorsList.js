import React, { Component } from "react";
import Tutors from "../Tutors/Tutors";
import "./TutorsList.css";

class TutorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tutors">
        <div className="tutorsList">
          {this.props.prof.map(tutor => {
            return <Tutors tutor={tutor} />;
          })}
        </div>
      </div>
    );
  }
}

export default TutorsList;
