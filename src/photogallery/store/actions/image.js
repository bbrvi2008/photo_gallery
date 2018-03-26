import axios from 'axios';

import * as actionTypes from './actionTypes';
import { guid } from '../../../utils/guid';

const imageAddActions = {
  adding: () => ({
    
  }),
  addSuccess: (item) => ({
    type: actionTypes.ADD_IMAGE,
    item: {
      ...item,
      id: guid()
    }
  }),
  addFailure: () => ({

  })
}

export const imageActions = {
  add: (image) => dispatch => {
    const formData = new FormData();
    formData.append('image', image.imageBase64);
  
    console.log('sending');
    axios.post('https://api.imgur.com/3/image', formData, {
      headers: {
        'Authorization': 'Client-ID f655b3764361b93',
        'content-type': 'multipart/form-data'
      }
    }).then((response) => {
      const { data } = response;
      const imageURL = data.data.link;
      
      const item = {
        ...image,
        url: imageURL
      };

      console.log('sended');

      dispatch(imageAddActions.addSuccess(item));
    }).catch((error) => {
      console.log(error);
    })
  },
  remove: (item) => ({
    type: actionTypes.REMOVE_IMAGE,
    item
  })
}