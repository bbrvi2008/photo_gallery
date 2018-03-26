import * as actionTypes from './actionTypes';
import { guid } from '../../../utils/guid';

export const albumActions = {
  /*fetch: () => ({
    type: actionTypes.FETCH_ALBUMS,
    items
  }),*/
  add: (item) => ({
    type: actionTypes.ADD_ALBUM,
    item: {
      ...item,
      id: guid()
    }
  }),
  update: (item) => ({
    type: actionTypes.UPDATE_ALBUM,
    item
  }),
  remove: (item) => ({
    type: actionTypes.REMOVE_ALBUM,
    item
  })
}