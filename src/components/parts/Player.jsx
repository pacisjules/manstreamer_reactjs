import React from "react";
import '../style.css';

export default class Player extends React.Component {
  state = {
    message:"test"
  };

  render() {
    return (
      <div className="Player_container">
        <p>Bottom Bar</p>
      </div>
    );
  }
}