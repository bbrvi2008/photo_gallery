import React, { Component } from 'react'; 
import { Switch, Route, withRouter } from 'react-router-dom';

import AlbumsPage from './AlbumsPage';
import ImagesPage from './ImagesPage';

class PhotogalleryPage extends Component {
  render() {
    const { location } = this.props;

    return (
      <Switch>
        <Route exact path={`${location.pathname}/`} component={AlbumsPage} />
        <Route path={`${location.pathname}/album/:id`} component={ImagesPage} />          
      </Switch>
    );
  }
};

export default withRouter(props => <PhotogalleryPage {...props} />);