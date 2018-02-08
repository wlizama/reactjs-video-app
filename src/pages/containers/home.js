import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'

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
      <HomeLayout>
        <Related />
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
    )
   }
}

export default Home