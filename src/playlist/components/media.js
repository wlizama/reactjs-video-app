import React , {Component} from 'react';
import './media.css'

class Media extends Component {
  render(){
    return (
      <div className="Media">
        <div className="Media-cover">
          <img src="./images/covers/bitcoin.jpg" alt="" className="Media-image" width={260} height={160} />
          <h3 className="Media-title">tituliño</h3>
          <p className="Media-author">autor</p>
        </div>
      </div>
    );
  }
}

export default Media;