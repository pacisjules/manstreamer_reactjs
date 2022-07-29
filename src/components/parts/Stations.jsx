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