import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "../src/style/style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app">
          <Header></Header>
          <Main></Main>
        </div>
      </div>
    );
  }
}

export default App;
