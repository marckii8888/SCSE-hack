import React, { Component } from "react";
import Courselist from "../courselist/courselist";
import Forum from "../Forum/Forum";
import Mentor from "../Mentor/Mentor";
import TutorsList from "../TutorsList/TutorsList";
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
        name: "Dr. So and So",
        subject: "Algorithms",
        email: "SoandSo@e.ntu.edu.sg",
        pic: "../Tutors/prof1.jpg"
      },

      {
        name: "Dr. Ok and Ok",
        subject: "Operating Systems",
        email: "SoandSo@e.ntu.edu.sg",
        pic:
          /*"https://images.unsplash.com/photo-1464982326199-86f32f81b211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"*/ ""
      },
      {
        name: "Dr. Near and Far",
        subject: "Software Engineering",
        email: "SoandSo@e.ntu.edu.sg",
        pic:
          /*"https://d96xf8nw30hcy.cloudfront.net/SFImage/Images/rhododendron-valley-sikkim.jpg"*/ ""
      },
      {
        name: "Dr. Up and Down",
        subject: "Discrete Mathematics",
        email: "SoandSo@e.ntu.edu.sg",
        pic: ""
      }
    ]
  };
  //   render() {
  //     return (
  //       <div>
  //         <Navbar />
  //         <Courselist courses={this.state.courses} />
  //         <Forum />
  //         <Mentor />
  //         <TutorsList prof={this.state.prof} />
  //       </div>
  //     );
  //   }
  // }

  // export default App;

  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={["black"]}
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
                <div className="slide">
                  <TutorsList prof={this.state.prof} />
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default App;
