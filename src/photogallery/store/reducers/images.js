import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: []
};

const images = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_IMAGE:
      return {
        ...state,
        items: [
          ...state.items,
          action.item
        ]
      }
    case actionTypes.REMOVE_IMAGE:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.item.id)
      }
    default:
      return state;
  }
};

export default images;