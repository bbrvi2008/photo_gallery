import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Glyphicon, Panel, Button, Modal } from 'react-bootstrap';

import './AlbumItem.css';

class ImageItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  onClickRemove = () => {
    const { item, onRemove } = this.props;
    
    onRemove(item);
  }

  handleToggleModal = () => {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal
    });
  }

  render() {
    const { item } = this.props;
    const { showModal } = this.state;
    const style = {
      backgroundImage: `url(${item.url})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    return (
      <div>
        <Panel className="square">
            <div className="content icons">
              <div className="buttons">
                <Button bsSize="xsmall" onClick={this.onClickRemove}>
                  <Glyphicon glyph="trash"/> 
                </Button>    
              </div>
            </div>
            <div className="content image_item" style={style}  onClick={this.handleToggleModal}>

            </div>
        </Panel>
        <Modal 
          show={showModal}
          onHide={this.handleToggleModal}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <img src={item.url} alt="test" className="modal_image" />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
};

ImageItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default ImageItem;