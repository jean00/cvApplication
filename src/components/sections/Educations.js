import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
    this.name = "educations";
  }
  state = {
    education: [
      {
        school: "",
        city: "",
        degree: "",
      },
    ],
    hidden: true,
    disabled: false,
  };

  handleChange = (e, index) => {
    e.preventDefault();
    let handle = [...this.state.education];
    handle[index][e.target.name] = e.target.value;
    this.setState({
      education: [...handle],
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

  addFields = (e) => {
    e.preventDefault();
    this.setState({
      education: [
        ...this.state.education,
        { school: "", city: "", degree: "" },
      ],
    });
  };

  removeField = (e, index) => {
    e.preventDefault();
    const remove = [...this.state.education];
    remove.splice(index, 1);
    this.setState({
      education: [...remove],
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
      <div className="education">
        <form className="educationInfos" onSubmit={this.onSubmitTask}>
          <h1 className="info">Education </h1>
          <button className="submit button" disabled={this.state.disabled}>
            Submit
          </button>
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
          {this.state.education.map((input, index) => {
            return (
              <div className="container" key={index}>
                <div className="degree">
                  <div>
                    <label> School name: </label>
                    <input
                      name="school"
                      type="text"
                      onChange={(e) => this.handleChange(e, index)}
                      value={input.school}
                      placeholder=" Bicocca university"
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
                      placeholder=" Milan"
                      disabled={this.state.disabled}
                      required
                    ></input>
                  </div>
                  <div>
                    <label> Degree: </label>
                    <input
                      name="degree"
                      type="text"
                      onChange={(e) => this.handleChange(e, index)}
                      value={input.degree}
                      placeholder=" PHD in computer science"
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

export default Education;
