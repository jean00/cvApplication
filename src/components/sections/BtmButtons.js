import React, { Component } from "react";

class BtmButtons extends Component {
  state = {
    hidden: true,
  };
  hideButtons = (e) => {
    e.preventDefault();
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((e) => {
      if (e.className !== "back button") e.style.visibility = "hidden";
    });
    this.setState({ hidden: false });
  };

  exposeButtons = (e) => {
    e.preventDefault();
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((e) => {
      e.style.visibility = "visible";
    });
    this.setState({ hidden: true });
  };

  render() {
    return (
      <div>
        <button className="preview button" onClick={this.hideButtons}>
          {" "}
          preview{" "}
        </button>
        <button
          className="back button"
          hidden={this.state.hidden}
          onClick={this.exposeButtons}
        >
          {" "}
          back
        </button>
      </div>
    );
  }
}

export default BtmButtons;
