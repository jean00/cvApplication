import React, { Component } from "react";

class PersonalInformations extends Component {
  state = {
    firstname: "",
    lastname: "",
    homeaddress: "",
    city: "",
    postalcode: "",
    birthday: "",
    disabled: false,
    hidden: true,
  };

  render() {
    return (
      <div className="inputInfos Container">
        <form className="PersonalinfosForm">
          <h1 className="pInfos info"> Personal information </h1>
          <button
            type="submit"
            disabled={this.state.disabled}
            className="submit button"
          >
            Submit
          </button>
          <button
            className="modify button"
            hidden={this.state.hidden}
            onClick={this.enableInput}
          >
            Modify
          </button>
          <div className="firstname">
            <label> First name: </label>
            <input
              name="firstname"
              type="text"
              onChange={this.handleChange}
              value={this.state.firstname}
              disabled={this.state.disabled}
              placeholder=" Marco"
              required
            ></input>
          </div>
          <div className=" lastname">
            <label> Last name: </label>
            <input
              name="lastname"
              type="text"
              onChange={this.handleChange}
              value={this.state.lastname}
              disabled={this.state.disabled}
              placeholder=" Rossi"
              required
            ></input>
          </div>
          <div className="homeAddress">
            <label> Home address: </label>
            <input
              name="homeaddress"
              type="text"
              onChange={this.handleChange}
              value={this.state.homeaddress}
              disabled={this.state.disabled}
              placeholder=" Via CATENA, 10"
              required
            ></input>
          </div>
          <div className="city">
            <label> City: </label>
            <input
              name="city"
              type="text"
              onChange={this.handleChange}
              value={this.state.city}
              disabled={this.state.disabled}
              placeholder=" Milano"
              required
            ></input>
          </div>
          <div className="postalCode">
            <label> Postal code: </label>
            <input
              name="postalcode"
              type="number"
              onChange={this.handleChange}
              value={this.state.postalcode}
              disabled={this.state.disabled}
              placeholder=" 20121"
              required
            ></input>
          </div>
          <div className="birthday">
            <label> Birthday: </label>
            <input
              name="birthday"
              type="date"
              onChange={this.handleChange}
              value={this.state.birthday}
              disabled={this.state.disabled}
              required
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default PersonalInformations;
