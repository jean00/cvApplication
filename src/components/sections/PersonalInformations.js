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

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      disabled: true,
      hidden: false,
    });
    console.log(this.state);
    this.props.submit(this.state.disabled)
  };//google setstate does not update state immediately

  enableInput = (e) => {
    e.preventDefault();
    if (this.state.hidden === true) {
      this.setState({
        hidden: false,
        disabled: false,
      });
    } else {
      this.setState({
        hidden: true,
        disabled: false,
      });
    }
  };

  render() {
    return (
      <div className="inputInfos">
        <form className="PersonalinfosForm" onSubmit={this.onSubmitTask}>
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
