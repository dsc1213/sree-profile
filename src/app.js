import React, { PureComponent } from "react";
import Side from "./components/Side/side"
import './app.css';

export default class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="sideBar"> <Side /> </div>
        <div className="content">
          <div className="top"> <h1>Hi this is Top </h1></div>
          <div className="bottom"> <h1>Hi this is Bottom </h1></div>
        </div>
      </div>
    )
  }
}