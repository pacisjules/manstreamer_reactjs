# manstreamer_reactjs Best Radios and Tvs Streamming online
 Project will help you to stream radios  and tvs online. Don't be stress while in Job use this app
 and some time you need to watch some Tvs without Antena use our streaming
 
 ## How it's Work
 ### This Startap for everyone you can select radio you need.
  by clicking the Radiowith name, Country and its Icon
 ![see 1](https://user-images.githubusercontent.com/51479761/181839406-53d564ba-b285-4137-b041-786ecdcdc34a.png)
 
 ### Down There you found Player side where you can Stop or control the Volume
 If you Pause your radio will stop until you play again
 and to volume will help you reduce or increase sound volume
 
 ![image](https://user-images.githubusercontent.com/51479761/181839750-0ad73127-8512-43b4-bf7e-4716a3918075.png)

### By Testing and See real project
Please click this Link https://enchanting-lolly-c55eaf.netlify.app


## How code is (On app.js)
``` javascript
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

```

## How code is (On Mainstream.jsx)
``` javascript
import React from "react";
import './style.css';
import Stations from './parts/Stations.jsx';
import { IoTvSharp, IoRadioSharp } from 'react-icons/io5';
import { RiSearchEyeLine } from 'react-icons/ri';
import { FaWhatsappSquare } from 'react-icons/fa';
import { ImPrevious2, ImNext2 } from 'react-icons/im'


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
      result: "Time now: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
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
            <div className="searchBox">

              
              <RiSearchEyeLine style={{
                fontSize: '30px',
                color: '#a300a8',
                marginLeft: "15px",
                marginTop: "5px",
                float: "left"
              }} />
              <input type="text" placeholder="Search Radio name or Tv here.." />
            </div>

            <a href="whatsapp://send?text=Visit this Link to stream any Radio online" data-action="share/whatsapp/share"><FaWhatsappSquare style={{
              fontSize: '30px',
              color: 'white',
              float: "right",
              marginRight:"-55px",
              marginTop: "5px",
              cursor: "pointer"
            }} /></a>
            

            <p><marquee>{"Now streaming "+localStorage.getItem("radio_name")+", " +localStorage.getItem("radio_country")+"....."}</marquee></p>
            
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
```

## On Streaming

``` javascript

import React from "react";
import '../style.css';
import './playerStyle.css'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import axios from 'axios';
import Infinity from '../../assets/imgs/Infinity.gif';
import { MdSkipPrevious, MdSkipNext, MdPlayCircleFilled, MdVolumeUp, MdOutlinePauseCircleFilled } from 'react-icons/md';

const umuziki = new Audio();
localStorage.setItem('playState', false);
localStorage.setItem('play_up', 0);

localStorage.setItem('play', 'none');
localStorage.setItem('pause', 'none');


class Radio extends React.Component {
    render() {
        return <div className="radio_station" onClick={() => {
            localStorage.setItem('Stream_Radio', this.props.streamLink);
            umuziki.src = localStorage.getItem('Stream_Radio');
            umuziki.volume = 15 / 100;
            umuziki.play();

            localStorage.setItem('playState', true);
            localStorage.setItem('radio_name', this.props.name);
            localStorage.setItem('radio_country', this.props.country);
            localStorage.setItem('radio_icon', this.props.src);
            localStorage.setItem('play_up', 1);
            localStorage.setItem('play', 'none');
            localStorage.setItem('pause', 'flex');
        }}>
            <div className="labelHover">
                <BsFillPlayCircleFill className="playAnime" style={{
                    fontSize: "50px",
                }} />
            </div>

            <div className="radio_station_img">
                <img src={this.props.src} alt="radio" />
            </div>

            <p style={{
                fontSize: "15px",
                color: "#ff0040",
                fontWeight: "bold",
                paddingLeft: "5px",
            }}>{this.props.name}</p>
            <p style={{
                fontSize: "11px",
                color: "white",
                paddingLeft: "5px",
            }}>{this.props.country}</p>
        </div>;
    }
}


export default class Stations extends React.Component {
    state = {
        message: "test",
        ouradios: [],
        apisStatusLoad: false,
        volume: 25,

        playState: localStorage.getItem('playState'),
        radio_name: localStorage.getItem('radio_name'),
        radio_country:localStorage.getItem('radio_country'),
        radio_icon:localStorage.getItem('radio_icon'),
        open_player: localStorage.getItem('play_up'),
        play: localStorage.getItem('play'),
        pause: localStorage.getItem('pause'),
        
    };


    componentDidMount = () => {
        axios.get(`https://radiosstreamerfrompacis1rw.herokuapp.com/all_Radios`)
            .then(res => {
                const Radios = res.data.items;
                this.setState({ ouradios: Radios, apisStatusLoad: true, });
            })
    }


    timer = setInterval(() => {
        this.setState({
            playState: localStorage.getItem('playState'),
            radio_name: localStorage.getItem('radio_name'),
            radio_country:localStorage.getItem('radio_country'),
            radio_icon:localStorage.getItem('radio_icon'),
            open_player: localStorage.getItem('play_up'),
            play: localStorage.getItem('play'),
            pause: localStorage.getItem('pause'),
        })
      }, 1000);


    play = () => {
        umuziki.src = localStorage.getItem('Stream_Radio');
        umuziki.volume = 15 / 100;
        umuziki.play();
        localStorage.setItem('play', 'none');
        localStorage.setItem('pause', 'flex');
    }

    pause = () => {
        umuziki.pause();
        localStorage.setItem('play', 'flex');
        localStorage.setItem('pause', 'none');
        localStorage.setItem('play_up', 0);
    }

    render() {
        if (this.state.apisStatusLoad === true) {
            return (
                <>
                    <div className="Player_container" style={{
                        opacity: this.state.open_player,
                    }}>
                        <div className="Radio_info">
                            <div className="Radio_info_img">
                                <img src={this.state.radio_icon} alt="radio" />
                            </div>
                            <div className="Radio_info_text">
                                <p style={{
                                    fontSize: "13px",
                                    fontWeight: "bold",
                                }}>{this.state.radio_name}</p>
                                <p style={{
                                    fontSize: "9px",
                                }}>{this.state.radio_country}</p>
                            </div>
                        </div>

                        <div className="Player_controls">
                            <MdSkipPrevious className="PNicon" style={{
                                fontSize: "30px",
                            }} />

                                <MdOutlinePauseCircleFilled className="PlayPauseicon" onClick={this.pause} style={{
                                    display: this.state.pause,
                                }}/>
                                <MdPlayCircleFilled className="PlayPauseicon" onClick={this.play} style={{
                                    display:this.state.play,
                                }}/>

                            <MdSkipNext className="PNicon" style={{
                                fontSize: "30px",
                            }} />
                        </div>

                        <div className="Player_volume">
                            <div className="Player_volume_icon">
                                <MdVolumeUp style={{
                                    fontSize: "20px",
                                    marginTop: "12px",
                                    marginRight: "10px",
                                }} />
                            </div>
                            <div className="Player_volume_slider">
                                <input type="range" min="1" max="100" value={this.state.volume} className="range blue" onChange={(e) => {
                                    this.setState({
                                        volume: e.target.value
                                    })

                                    umuziki.volume = e.target.value / 100;

                                }} />
                            </div>
                            <p style={{
                                fontSize: "15px",
                                marginTop: "10px",
                            }}>{this.state.volume} %</p>
                        </div>

                    </div>

                    <div className="Stations_Base">
                        {this.state.ouradios.map((item, index) => {
                            return <Radio key={item.radio_id} name={item.radio_name} country={item.country} src={item.logo_link} streamLink={item.stream_link} />
                        }
                        )}
                        
                    </div>

                </>
            )
        } else {
            return (
                <>
                    <div className="Stations_Laoder">
                        <img src={Infinity} alt="loader" />
                        <p>Please wait ...</p>
                    </div>
                </>
            );
        }
    }
}

```
 

