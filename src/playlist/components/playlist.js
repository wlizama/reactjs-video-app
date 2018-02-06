import React from 'react';
import Media from './media.js';
import './playlist.css'
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import Volume from '../../icons/components/volume'
import FullScreen from '../../icons/components/fullScreen'

function Playlist(props) {

  const playlist = props.data.categories[1].playlist
  
  return(
    <div className="Playlist">
      <Play size={30} color="#8B1E95"/>
      <Pause size={30} color="#406D83"/>
      <Volume size={30} color="#E16716"/>
      <FullScreen size={30} color="#303030"/>
      {
        playlist.map((item) => {
          return <Media key={item.id} {...item} />
        })
      }      
    </div>
  );
}

export default Playlist;