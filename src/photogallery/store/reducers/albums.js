import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: []
};

const albums = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALBUMS:
      return {
        ...state,
        items: action.items
      }
    case actionTypes.ADD_ALBUM:
      return {
        ...state,
        items: [
          ...state.items,
          action.item
        ]
      }
    case actionTypes.UPDATE_ALBUM:
      return {
        ...state,
        items: state.items.map(item => {
          return item.id === action.item.id
            ? action.item
            : item;
        })
      }
    case actionTypes.REMOVE_ALBUM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.item.id)
      }
    default:
      return state;
  }
};

export default albums;