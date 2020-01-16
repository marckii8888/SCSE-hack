import React, { Component } from "react";
import "./Tutors.css";

class Tutors extends Component {
  render() {
    const { tutor } = this.props;
    return (
      <div className="tutors">
        <div className="image-container">
          <img src={tutor.pic} alt="" />
        </div>
        <div className="tutor-info">
          <h1>{tutor.name}</h1>
          <h2>{tutor.subject}</h2>
          <h2>{`Email: ${tutor.email}`}</h2>
        </div>
      </div>
    );
  }
}

export default Tutors;

