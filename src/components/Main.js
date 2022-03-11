import React, { Component } from "react";
import PersonalInformations from "./sections/PersonalInformations";
import Profile from "./sections/Profile";

class Main extends Component {
  render() {
    return (
      <main>
        <section className="cv">
          <div className="doc">
            <section className="top">
              <Profile></Profile>
              <PersonalInformations></PersonalInformations>
            </section>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
