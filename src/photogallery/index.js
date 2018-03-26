import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'; 

import PhotogalleryPage from './containers/PhotogalleryPage';

export default class Photogallery extends Component {
  render() {
    return (
      <BrowserRouter>
        <PhotogalleryPage />
      </BrowserRouter>
    );
  }
}