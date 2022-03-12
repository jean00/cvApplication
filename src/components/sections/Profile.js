import React, { Component } from "react";

class Profile extends Component {
  state = {
    img: "http://www.vmcolor.it/layout/images/man-profile.png",
  };

  imgHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) this.setState({ img: reader.result });
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { img } = this.state;
    return (
      <div className="imgcontainer">
        <label htmlFor="file-input">
          {" "}
          {/* make the image clickable with same action of the input type file */}
          <img src={img}></img>
        </label>
        <input
          type="file"
          className="file-input"
          accept="image/*"
          onChange={this.imgHandler}
        />
      </div>
    );
  }
}

export default Profile;
