import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'

class VideoPlayer extends Component {
  state = {
    pause : true
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

  render(){
    return(
      <VideoPlayerLayout>
        <Title title="Tituliño de video" />
        <PlayPause pause={this.state.pause} handleClick={this.tooglePlay} />
        <Video autoplay={this.props.autoplay} pause={this.state.pause} src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"/>
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer