import React , { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css'

class Media extends PureComponent {

  // constructor(props){
  //   super(props)

  //   this.state = {
  //     author : props.author
  //   }
  // }

  // handleClick = (evt) => {
  //   // console.log(this.props.image)
  //   this.setState({
  //     author : "Nicolas Cage"
  //   })
  // }


  render(){
    return (
      <div className="Media">
        <div className="Media-cover">
          <img className="Media-image"src={this.props.cover} width={260} height={160} />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  cover : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  author : PropTypes.string,
  type : PropTypes.oneOf(['video', 'audio'])
}

export default Media;