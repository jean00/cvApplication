import React, { Component } from "react";

class Contacts extends Component {
  constructor() {
    super();
    this.name = "contacts";
  }

  state = {
    phone: [""],
    email: [""],
    disabled: false,
    hidden: true,
  };
  handleChangePhone = (e, index) => {
    e.preventDefault();
    let handle = [...this.state.phone];
    handle[index] = e.target.value;
    this.setState({
      phone: [...handle],
    });
  };

  handleChangeMail = (e, index) => {
    e.preventDefault();
    let handle = [...this.state.email];
    handle[index] = e.target.value;
    this.setState({
      email: [...handle],
    });
  };

  addInputPhone = (e) => {
    e.preventDefault();
    this.setState({ phone: [...this.state.phone, ""] });
  };

  addInputEmail = (e) => {
    e.preventDefault();
    this.setState({ email: [...this.state.email, ""] });
  };

  removeFieldPhone = (e, index) => {
    e.preventDefault();
    const remove = [...this.state.phone];
    remove.splice(index, 1);
    this.setState({
      phone: [...remove],
    });
  };

  removeFieldMail = (e, index) => {
    e.preventDefault();
    const remove = [...this.state.email];
    remove.splice(index, 1);
    this.setState({
      email: [...remove],
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState(
      {
        disabled: true,
        hidden: false,
      },
      () => {
        this.props.submit(this.state.disabled, this.name); //using callback to get the updated value of disabled
      }
    );
  };

  enableInput = (e) => {
    e.preventDefault();
    if (this.state.hidden === true) {
      this.setState({
        hidden: false,
        disabled: false,
      });
    } else {
      this.setState(
        {
          hidden: true,
          disabled: false,
        },
        () => this.props.submit(this.state.disabled, this.name)
      );
    }
  };

  render() {
    return (
      <div className="contacts">
        <form onSubmit={this.onSubmitTask}>
          <h1 className="info"> Contacts </h1>
          <button className="submit button" disabled={this.state.disabled}>
            Submit
          </button>
          <button
            className="modify button"
            onClick={this.enableInput}
            hidden={this.state.hidden}
          >
            Modify
          </button>
          {this.state.phone.map((input, index) => {
            return (
              <div className="contactsInfos" key={index}>
                <div className="phone">
                  <label> Phone Number: </label>
                  <input
                    name="phone"
                    type="tel"
                    onChange={(e) => this.handleChangePhone(e, index)}
                    value={input}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder=" 123-456-7890"
                    disabled={this.state.disabled}
                    required
                  ></input>
                  <button
                    className="addmore button"
                    onClick={this.addInputPhone}
                    disabled={this.state.disabled}
                  >
                    {" "}
                    Add more numbers{" "}
                  </button>
                  <button
                    className="remove button"
                    onClick={(e) => this.removeFieldPhone(e, index)}
                    disabled={this.state.disabled}
                  >
                    {" "}
                    remove field{" "}
                  </button>
                </div>
              </div>
            );
          })}
          {this.state.email.map((input, index) => {
            return (
              <div key={index}>
                <div className="email">
                  <label> Email: </label>
                  <input
                    name="email"
                    type="email"
                    onChange={(e) => this.handleChangeMail(e, index)}
                    value={input}
                    placeholder=" try@globex.com"
                    disabled={this.state.disabled}
                    required
                  ></input>
                  <button
                    className="addmore button"
                    onClick={this.addInputEmail}
                    disabled={this.state.disabled}
                  >
                    {" "}
                    Add more numbers{" "}
                  </button>
                  <button
                    className="remove button"
                    onClick={(e) => this.removeFieldMail(e, index)}
                    disabled={this.state.disabled}
                  >
                    {" "}
                    remove field{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </form>
      </div>
    );
  }
}

export default Contacts;
