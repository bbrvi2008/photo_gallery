import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Glyphicon, Panel, FormControl } from 'react-bootstrap';

class NewAlbumButton extends Component {
  render() {
    const { onAdd } = this.props;
    const onCLickNew = () => {
      const item = {
        title: "Новый альбом"
      };
      
      onAdd(item);
    };

    return (
      <Panel onClick={onCLickNew} className="square">
        <Panel.Body className="content uploader">
          <div>
            <Glyphicon glyph="plus" />       
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}

export default NewAlbumButton;