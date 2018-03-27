import React, { Component } from 'react'; 
import { Switch, Route } from 'react-router-dom';

import AlbumsPage from './AlbumsPage';
import ImagesPage from './ImagesPage';

class PhotogalleryPage extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={`/`} component={AlbumsPage} />
        <Route path={`/album/:id`} component={ImagesPage} />          
      </Switch>
    );
  }
};

export default PhotogalleryPage;