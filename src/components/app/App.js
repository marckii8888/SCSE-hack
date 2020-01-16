import React, { Component } from "react";
import Courselist from "../courselist/courselist";
import Forum from "../Forum/Forum";
import Mentor from "../Mentor/Mentor";
import Tutors from "../Tutors/Tutors";
import "./App.css";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
class App extends Component {
  state = {
    courses: [
      {
        name: "Year 1",
        url: "https://wastedpotnetial.discussion.community/?forum=773704 "
      },
      {
        name: "Year 2",
        url: "https://wastedpotnetial.discussion.community/?forum=773699"
      },
      {
        name: "Year 3",
        url: "https://wastedpotnetial.discussion.community/?forum=773712"
      },
      {
        name: "Year 4",
        url: "https://wastedpotnetial.discussion.community/?forum=773713"
      }
    ],

    prof: [
      {
        name: "Dr Smitha K G",
        subject: "Advanced Computer Architecture",
        email: "smitha",
        pic: "https://research.ntu.edu.sg/expertise/AcademicProfile/Pages/StaffPhoto.aspx?ST_EMAILID=smitha"
      },

      {
        name: "Assoc Prof Vun Chan Hua, Nicholas",
        subject: "Microprocessor",
        email: "aschvun",
        pic: "https://research.ntu.edu.sg/expertise/AcademicProfile/Pages/StaffPhoto.aspx?ST_EMAILID=aschvun"
      },
      {
        name: "Assoc Prof Goh Wooi Boon",
        subject: "Computer Architecture and Organisation",
        email: "aswbgoh",
        pic: "https://research.ntu.edu.sg/expertise/AcademicProfile/Pages/StaffPhoto.aspx?ST_EMAILID=aswbgoh"
      },
      {
        name: "Dr Sourav Sen Gupta",
        subject: "Introduction to Data Science and Artificial Intelligence",
        email: "sg.sourav",
        pic: "https://research.ntu.edu.sg/expertise/AcademicProfile/Pages/StaffPhoto.aspx?ST_EMAILID=sg.sourav"
      }
    ]
  };

  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={["rgb(13,22,22)", "#282c34", "#282c34"]}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <Courselist courses={this.state.courses} />
              </div>
              <div className="section">
                <Forum />
              </div>
              <div className="section">
                <div className="slide">
                  <Mentor fx={() => fullpageApi.moveTo(3, 1)} />
                </div>
                {this.state.prof.map(tutor => {
                  return (
                    <div className="slide">
                      <Tutors tutor={tutor} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default App;
