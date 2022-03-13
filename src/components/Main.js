import React, { Component } from "react";
import PersonalInformations from "./sections/PersonalInformations";
import Profile from "./sections/Profile";
import Contacts from "./sections/Contacts";
import Educations from "./sections/Educations";
import Experiences from "./sections/Experiences";
import Languages from "./sections/Languages";
import Buttons from "./sections/BtmButtons";

class Main extends Component {
  state = {
    personalInfomations: "",
    contacts: "",
    educations: "",
    experiences: "",
    languages: "",
    disabled: true,
  };

  iterator = () => {
    let array = Object.values(this.state);
    array.pop(); //popping the last element because we don't need it here
    if (array.every((e) => e === true)) this.setState({ disabled: false });
  };

  checkSubmit = (isDisable, name) =>
    this.setState({ [name]: isDisable }, () => this.iterator());

  hideButtons = () => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((e) => {
      e.style.visibility = "hidden";
    });
  };

  render() {
    return (
      <main>
        <section className="cv">
          <div className="doc">
            <section className="top">
              <Profile></Profile>
              <PersonalInformations
                submit={this.checkSubmit}
              ></PersonalInformations>
            </section>
            <section className="mid">
              <Contacts
                name={this.checkSubmit}
                submit={this.checkSubmit}
              ></Contacts>
              <Educations submit={this.checkSubmit}></Educations>
              <Experiences submit={this.checkSubmit}></Experiences>
              <Languages submit={this.checkSubmit}></Languages>
            </section>
            <section className="bottom">
              <Buttons></Buttons>
              <button disabled={this.state.disabled} className="export button">
                {" "}
                Export pdf
              </button>
            </section>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
