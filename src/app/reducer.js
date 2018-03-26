import { combineReducers } from 'redux';
import albums from '../photogallery/store/reducers/albums';
import images from '../photogallery/store/reducers/images';

const rootReducer = combineReducers({
  albums,
  images
});

export default rootReducer;