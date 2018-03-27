import React, { Component } from 'react';
import { connect } from 'react-redux';

import ImageItem from '../components/ImageItem';
import NewImageButton from '../components/buttons/NewImage';

import { Grid, Row, Col } from 'react-bootstrap';

import { imageActions } from '../store/actions/image';


class ImagesPage extends Component {
  onAddImage = (imageBase64) => {
    const { onAddImage, match } = this.props;
    const { params } = match;

    const image = {
      imageBase64: imageBase64,
      albumId: params.id
    };

    onAddImage(image);
  }


  render() {
    const { images, onRemoveImage, match } = this.props;
    const { params } = match;

    const items = images.items.filter((image) => {
      return image.albumId === params.id;
    })

    return (
      <Grid fluid={true}>
        <Row>
          {
            items.length !== 0 &&
            items.map(item => (
              <Col xs={6} sm={4} md={2} key={item.id}>
                <ImageItem item={item} onRemove={onRemoveImage} />                
              </Col>
            ))
          }
          <Col xs={6} sm={4} md={2}>
            <NewImageButton onAddImage={this.onAddImage} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddImage: (image) => {
      dispatch(imageActions.add(image));
    },
    onRemoveImage: (image) => {
      dispatch(imageActions.remove(image));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesPage);