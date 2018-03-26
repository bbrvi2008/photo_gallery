import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Glyphicon } from 'react-bootstrap';
import ButtonLayout from './Layout';

class NewAlbum extends Component {
  onCLickNew = () => {
    const { onAdd } = this.props;
    const item = {
      title: "Новый альбом"
    };
    
    onAdd(item);
  }

  render() {
    return (
      <ButtonLayout >
        <Glyphicon glyph="plus" onClick={this.onCLickNew} />       
      </ButtonLayout>
    );
  }
}

export default NewAlbum;