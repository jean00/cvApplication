import React, { Component } from "react";
import PersonalInformations from "./sections/PersonalInformations";
import Profile from "./sections/Profile";
import Contacts from "./sections/Contacts";
import Educations from "./sections/Educations";
import Experiences from "./sections/Experiences";
import Languages from "./sections/Languages";

class Main extends Component {
  state = {
    submit: ""
  }
  checkSubmit = (ssubmit) => {
    this.setState({submit: ssubmit})
    console.log(this.state.submit)
  }
  render() {
    return (
      <main>
        <section className="cv">
          <div className="doc">
            <section className="top">
              <Profile></Profile>
              <PersonalInformations submit = {this.checkSubmit}></PersonalInformations>
            </section>
            <section className="mid">
              <Contacts></Contacts>
              <Educations></Educations>
              <Experiences></Experiences>
              <Languages></Languages>
            </section>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
