import React from 'react';
import Media from './media.js';
import './playlist.css'


function Playlist(props) {

  const playlist = props.data.categories[1].playlist
  console.log(props.data)
  
  return(
    <div className="Playlist">
      {
        playlist.map((item) => {
          return <Media key={item.id} {...item} />
        })
      }      
    </div>
  );
}

export default Playlist;