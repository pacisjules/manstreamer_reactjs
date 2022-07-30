import React from "react";
import './style.css';
import Stations from './parts/Stations.jsx';
import { IoTvSharp, IoRadioSharp } from 'react-icons/io5';
import { RiSearchEyeLine } from 'react-icons/ri';
import { FaWhatsappSquare } from 'react-icons/fa';
import { ImPrevious2, ImNext2 } from 'react-icons/im'
import { CgMenuGridR } from 'react-icons/cg'
import { RiCloseCircleFill } from 'react-icons/ri'
export default class Mainstream extends React.Component {

  state = {
    message: "test",
    result: "",
    onSide: "none",
  };


  testimg = () => {
    this.setState({
      result: this.state.result + 1
    })
  }

  timer = setInterval(() => {
    var date = new Date();
    this.setState({
      result: "Time now: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    })
  }, 1000);

  render() {
    return (
      <div className="container">
        <div className="leftSide" style={{
          display: this.state.onSide
        }}>


          <div className="searchBox">
            <RiSearchEyeLine style={{
              fontSize: '30px',
              marginRight: '10px',
              color: '#401a55'
            }} />
            <input type="text" placeholder="Search here.." />
          </div>

          <RiCloseCircleFill className="Closemenu" onClick={() => {
            this.setState({
              onSide: "none"
            })
          }} style={{
            display: this.state.onSide,
          }} />


          <div className="menu1">
            <ul>
              {/* <li><MdExplore style={{
                fontSize: "20px",
                color: "#00bfff",
                marginRight: "10px"
              }} /> Explore</li>
              <li><AiTwotoneThunderbolt style={{
                fontSize: "20px",
                color: "#d400ff",
                marginRight: "10px"
              }} /> Chanel</li> */}
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
              {/* <li>Bongo</li>
              <li>Sport</li> */}
              <li>News</li>
              <li>Music</li>
            </ul>
          </div>



        </div>


        <div className="leftSide">


          <div className="searchBox">
            <RiSearchEyeLine style={{
              fontSize: '30px',
              marginRight: '10px',
              color: '#401a55'
            }} />
            <input type="text" placeholder="Search here.." />
          </div>

          <RiCloseCircleFill className="Closemenu" onClick={() => {
            this.setState({
              onSide: "none"
            })
          }} style={{
            display: this.state.onSide,
          }} />


          <div className="menu1">
            <ul>
              {/* <li><MdExplore style={{
                fontSize: "20px",
                color: "#00bfff",
                marginRight: "10px"
              }} /> Explore</li>
              <li><AiTwotoneThunderbolt style={{
                fontSize: "20px",
                color: "#d400ff",
                marginRight: "10px"
              }} /> Chanel</li> */}
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
              {/* <li>Bongo</li>
              <li>Sport</li> */}
              <li>News</li>
              <li>Music</li>
            </ul>
          </div>



        </div>
        <div className="rightSide">

          <div className="header">
            <CgMenuGridR className="sideMenu" onClick={() => {
              this.setState({
                onSide: "flex",
              })
            }} />
            <div className="searchBox">
              <RiSearchEyeLine className="srchMain" style={{
                fontSize: '30px',
                color: '#a300a8',
                marginLeft: "15px",
                marginTop: "5px",
                float: "left"
              }} />
              <input type="text" placeholder="Search Radio name or Tv here.." />
            </div>

            <a href="whatsapp://send?text=Visit this Link to stream any Radio online https://enchanting-lolly-c55eaf.netlify.app" data-action="share/whatsapp/share"><FaWhatsappSquare style={{
              fontSize: '30px',
              color: 'white',
              float: "right",
              marginRight: "-55px",
              marginTop: "5px",
              cursor: "pointer"
            }} /></a>


            {/* <p><marquee>{"Now streaming "+localStorage.getItem("radio_name")+", " +localStorage.getItem("radio_country")+"....."}</marquee></p> */}

          </div>

          <div className="mainheader">


            <div className="mainheaderImgs">

              <ImPrevious2 className="icon" style={{
                fontSize: "60px",
                marginLeft: "-65px",
                left: "0px",
                marginTop: "5px",
                cursor: "pointer",
                position: "absolute",
                zIndex: "5",
              }} />


              <img src="https://thumbs.dreamstime.com/b/summer-background-poster-yellow-radio-receiver-beach-over-sea-palm-trees-blue-sky-beautiful-landscape-retro-vintage-185693046.jpg" alt="Staff"
                onClick={this.testimg}
                className="mainphoto"
              />

              <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/04/44/68/515854b67e497d4.jpg" alt="Staff"
                onClick={this.testimg}
                className="mainphoto2"
              />


              <img src="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images-medium-5/radio-city-music-hall-landscape-view-randy-aveille.jpg" alt="Staff"
                onClick={this.testimg}
                className="mainphoto3"
              />
              <ImNext2 className="icon" style={{
                fontSize: "60px",
                marginRight: "-65px",
                marginTop: "5px",
                cursor: "pointer",
                position: "absolute",
                right: "0px",
                zIndex: "5",
              }} />

            </div>
          </div>
          <Stations />
        </div>

      </div>
    );
  }
}
