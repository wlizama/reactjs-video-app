import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component {

  state = {
    modalVisible: false
  }

  handleOpenModal = (evt) => {
    this.setState({
      modalVisible : true
    })
  }

  handleCloseModal = (evt) => {
    this.setState({
      modalVisible : false
    })
  }

   render(){
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <VideoPlayer />
          <Categories categories={this.props.data.categories} handleOpenModal={this.handleOpenModal} />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <h2>Titulo de ventana Modal</h2>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
   }
}

export default Home