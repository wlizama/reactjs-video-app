import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'

class VideoPlayer extends Component {
  state = {
    pause : true,
    duration : 0,
    currentTime : 0
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
    // console.log(this.video.currentTime)
    this.setState({
      currentTime : this.video.currentTime
    })
  }

  handleProgressChange = evt => {
    this.video.currentTime =  evt.target.value
  }

  render(){
    return(
      <VideoPlayerLayout>
        <Title title="Tituliño de video" />
        <Controls>
          <PlayPause pause={this.state.pause} handleClick={this.tooglePlay} />
          <Timer duration={this.state.duration} currentTime={this.state.currentTime} />
          <ProgressBar duration={this.state.duration} value={this.state.currentTime} handleProgressChange={this.handleProgressChange} />
        </Controls>
        <Video 
          autoplay={this.props.autoplay} 
          pause={this.state.pause} 
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer