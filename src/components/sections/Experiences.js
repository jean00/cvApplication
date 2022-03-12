import React, { Component } from "react";

class Experiences extends Component {
  state = {
    experiences: [
      {
        company: "",
        position: "",
        city: "",
        from: "",
        to: "",
      },
    ],
    disabled: false,
    hidden: true,
  };

  handleChange = (e, index) => {
    e.preventDefault();
    let handle = [...this.state.experiences];
    handle[index][e.target.name] = e.target.value;
    this.setState({
      experiences: [...handle],
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      disabled: true,
      hidden: false,
    });
  };

  removeField = (e, index) => {
    e.preventDefault();
    const remove = [...this.state.experiences];
    remove.splice(index, 1);
    this.setState({
      experiences: [...remove],
    });
  };

  addFields = () => {
    this.setState({
      experiences: [
        ...this.state.experiences,
        { company: "", position: "", city: "", from: "", to: "" },
      ],
    });
  };

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
      <div className="experience">
        <form onSubmit={this.onSubmitTask}>
          <h1 className="info">Experience </h1>
          <button className="submit button">Submit</button>
          <button
            className="addmore button"
            onClick={this.addFields}
            disabled={this.state.disabled}
          >
            {" "}
            Add more{" "}
          </button>
          <button
            className="modify button"
            onClick={this.enableInput}
            hidden={this.state.hidden}
          >
            Modify
          </button>
          {this.state.experiences.map((input, index) => {
            return (
              <div className="div" key={index}>
                <div>
                  <div>
                    <label> Company: </label>
                    <input
                      name="company"
                      type="text"
                      onChange={(e) => this.handleChange(e, index)}
                      value={input.company}
                      placeholder=" Random Spa"
                      disabled={this.state.disabled}
                      required
                    ></input>
                  </div>
                  <div>
                    <label> Position: </label>
                    <input
                      name="position"
                      type="text"
                      onChange={(e) => this.handleChange(e, index)}
                      value={input.position}
                      placeholder=" Front end developer"
                      disabled={this.state.disabled}
                      required
                    ></input>
                  </div>
                  <div>
                    <label> City: </label>
                    <input
                      name="city"
                      type="text"
                      onChange={(e) => this.handleChange(e, index)}
                      value={input.city}
                      placeholder=" MIlan"
                      disabled={this.state.disabled}
                      required
                    ></input>
                  </div>
                  <div>
                    <label> From: </label>
                    <input
                      name="from"
                      type="date"
                      onChange={(e) => this.handleChange(e, index)}
                      value={input.from}
                      disabled={this.state.disabled}
                      required
                    ></input>
                  </div>
                  <div>
                    <label> To: </label>
                    <input
                      name="to"
                      type="date"
                      onChange={(e) => this.handleChange(e, index)}
                      value={input.to}
                      disabled={this.state.disabled}
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    className="remove button"
                    onClick={(e) => this.removeField(e, index)}
                    disabled={this.state.disabled}
                  >
                    {" "}
                    Remove field
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

export default Experiences;
