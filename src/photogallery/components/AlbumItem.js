import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Glyphicon, Panel, FormControl, Button, ButtonGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './AlbumItem.css';

class AlbumItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };
  }

  onClickRemove = () => {
    const { item, onRemove } = this.props;

    onRemove(item);
  }

  toggleEdit = () => {
    const { edit } = this.state;
    this.setState({
      edit: !edit
    });
  }

  onClickUpdate = (e) => {
    const { item, onUpdate } = this.props;
    const title = e.target.value;

    const newItem = {
      ...item,
      title
    };

    onUpdate(newItem)
  }

  render() {
    const { item } = this.props;
    const { edit } = this.state;

    return (
        <Panel className="square">
          <div className="content icons">
            <div className="buttons">
              <ButtonGroup>
                <Button bsSize="xsmall" onClick={this.toggleEdit}>
                  <Glyphicon glyph="pencil"/> 
                </Button>
                <Button bsSize="xsmall" onClick={this.onClickRemove}>
                  <Glyphicon glyph="trash"/> 
                </Button> 
              </ButtonGroup>  
            </div>
          </div>
          <Panel.Body className="content">
            <div className="album-item_body">
              <Link to={`album/${item.id}`}><Glyphicon glyph="folder-open" /></Link>
            </div>
            <div className="album-item_footer">
              {
                edit &&
                <FormControl type="text" bsSize="small" value={item.title} onChange={this.onClickUpdate} onBlur={this.toggleEdit}  />
              }
              {
                !edit &&
                <FormControl.Static>{item.title}</FormControl.Static>
              }
            </div>
          </Panel.Body>
        </Panel>

    );
  }
};

AlbumItem.propTypes = {
  item: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default AlbumItem;