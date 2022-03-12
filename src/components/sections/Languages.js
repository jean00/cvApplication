import React, { Component } from "react";

class Languages extends Component {
  state = {
    languages: [
      {
        language: "",
        level: "beginner",
      },
    ],
    disabled: false,
    hidden: true,
  };

  handleChange = (e, index) => {
    e.preventDefault();
    let handle = [...this.state.languages];
    handle[index][e.target.name] = e.target.value;
    this.setState({
      languages: [...handle],
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

  addFields = (e) => {
    e.preventDefault();
    this.setState({
      languages: [...this.state.languages, { language: "", level: "beginner" }],
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

  removeField = (e, index) => {
    e.preventDefault();
    const remove = [...this.state.languages];
    remove.splice(index, 1);
    this.setState({
      languages: [...remove],
    });
  };

  render() {
    //console.log(this.state);
    return (
      <div className="languages">
        <form onSubmit={this.onSubmitTask}>
          <h1 className="info">Languages </h1>
          <button className="submit button" disabled={this.state.disabled}>Submit</button>
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
          {this.state.languages.map((input, index) => {
            return (
              <div key={index}>
                <div>
                  <input
                    name="language"
                    type="text"
                    onChange={(e) => this.handleChange(e, index)}
                    value={input.language}
                    disabled={this.state.disabled}
                    required
                  ></input>
                  <select
                    name="level"
                    onChange={(e) => this.handleChange(e, index)}
                    value={input.level}
                    disabled={this.state.disabled}
                  >
                    <option value="beginner"> beginner </option>
                    <option value="intermediate"> intermediate </option>
                    <option value="expert"> expert </option>
                  </select>
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

export default Languages;
