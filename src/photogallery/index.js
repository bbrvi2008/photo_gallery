import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'; 

import PhotogalleryPage from './containers/PhotogalleryPage';

export default class Photogallery extends Component {
  render() {
    return (
      <HashRouter>
        <PhotogalleryPage />
      </HashRouter>
    );
  }
}