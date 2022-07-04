import React from "react";
import './style.css';
import Player from './parts/Player.jsx';
import { MdExplore } from 'react-icons/md';
import { AiTwotoneThunderbolt } from 'react-icons/ai'
import { IoTvSharp, IoRadioSharp } from 'react-icons/io5'
import { RiSearchEyeLine } from 'react-icons/ri'
export default class Mainstream extends React.Component {

  state = {
    message: "test",
    result: ""
  };


  testimg = () => {
    this.setState({
      result: this.state.result + 1
    })
  }


  timer = setInterval(() => {
    var date = new Date();
    this.setState({
      result: "Time now: " + date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
    })
  }, 1000);













render() {
  return (
    <div className="container">
      <div className="leftSide">


        <div className="searchBox">
          <RiSearchEyeLine style={{
            fontSize: '30px',
            marginRight: '10px',
            color: '#401a55'
          }} />
          <input type="text" placeholder="Search here.." />
        </div>


        <div className="menu1">
          <ul>
            <li><MdExplore style={{
              fontSize: "20px",
              color: "#00bfff",
              marginRight: "10px"
            }} /> Explore</li>
            <li><AiTwotoneThunderbolt style={{
              fontSize: "20px",
              color: "#d400ff",
              marginRight: "10px"
            }} /> Chanel</li>
            <li><IoTvSharp style={{
              fontSize: "20px",
              color: "#ff0080",
              marginRight: "10px"
            }} /> Tvs</li>
            <li><IoRadioSharp style={{
              fontSize: "20px",
              color: "#80ff00",
              marginRight: "10px"
            }} /> Radios</li>
          </ul>
        </div>
        <div className="menu2">
          <h3>Favorites</h3>
          <br />

          <ul>
            <li>Bongo</li>
            <li>Sport</li>
            <li>News</li>
            <li>Music</li>
          </ul>
        </div>

        <img src="https://cdn2.hubspot.net/hubfs/53/historyofmusicstreaming-compressor.jpg" alt="Staff photo"
          onClick={this.testimg}
        />

      </div>
      <div className="rightSide">
        <h2>{this.state.result}</h2>
      </div>
      <Player />
    </div>
  );
}
}
