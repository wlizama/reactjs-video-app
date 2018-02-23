import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'

class VideoPlayer extends Component {
  state = {
    pause : true,
    duration : 0,
    currentTime : 0,
    loading : false
  }

  tooglePlay = (evt) => {
    this.setState({
      pause : !this.state.pause
    })
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetadata = evt => {
    this.video = evt.target
    this.setState({
      duration : this.video.duration
    })
  }

  handleTimeUpdate = evt => {
    this.setState({
      currentTime : this.video.currentTime
    })
  }

  handleProgressChange = evt => {
    this.video.currentTime =  evt.target.value
  }

  handleSeeking = evt => {
    this.setState({
      loading : true
    })
  }

  handleSeeked = evt => {
    this.setState({
      loading : false
    })
  }

  handleVolumeChange = evt => {
    this.video.volume = evt.target.value
  }

  handleFullScreenClick = evt => {
    if (!document.webkitIsFullScreen) {
      // mando a full screen
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen();
      // salgo del full screen
    }
  }

  setRef = element => {
    this.player = element
  }

  render(){
    return(
      <VideoPlayerLayout setRef={this.setRef}>
        <Title title={this.props.title} />
        <Controls>
          <PlayPause pause={this.state.pause} handleClick={this.tooglePlay} />
          <Timer duration={this.state.duration} currentTime={this.state.currentTime} />
          <ProgressBar duration={this.state.duration} value={this.state.currentTime} handleProgressChange={this.handleProgressChange} />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        <Spinner
          active={this.state.loading}
        />
        <Video 
          autoplay={this.props.autoplay} 
          pause={this.state.pause} 
          src={this.props.src}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer