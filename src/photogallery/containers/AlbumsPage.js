import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import AlbumItem from '../components/AlbumItem';
import NewAlbumButton from '../components/buttons/NewAlbum';

import { albumActions } from '../store/actions/album';

import { Grid, Row, Col } from 'react-bootstrap';

class AlbumsPage extends Component {
  render() {
    const { albums, onAddAlbum, onUpdateAlbum, onRemoveAlbum } = this.props;

    return (
      <Grid fluid={true}>
        <Row>
          {
            albums.items.length !== 0 &&
            albums.items.map(item => (
              <Col xs={6} sm={4} md={2} key={item.id}>
                <AlbumItem item={item} onUpdate={onUpdateAlbum} onRemove={onRemoveAlbum} />
              </Col>
            ))
          }
          <Col xs={6} sm={4} md={2}>
            <NewAlbumButton onAdd={onAddAlbum} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAlbums: () => {
      dispatch(albumActions.fetch());
    },
    onAddAlbum: (album) => {
      dispatch(albumActions.add(album));
    },
    onUpdateAlbum: (album) => {
      dispatch(albumActions.update(album));
    },
    onRemoveAlbum: (album) => {
      dispatch(albumActions.remove(album));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsPage);