import React from "react";
import "./App.css";
import Mainstream from "./components/Mainstream.jsx";

export default class App extends React.Component {
  state = {
    bgcolor: "#696969",
    switchs: true,
    anime:"",
    ctcolor: "#cbd4d9",
    ctborderrd:"20px",
    message:"OFF",
    photoimg: "grayscale(0%)",
  };

  render() {
    return (
      <div className="App">
        <Mainstream/>
      </div>
    );
  }
}
