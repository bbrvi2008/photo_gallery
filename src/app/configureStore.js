import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducer';
import { loadState, saveState } from './localStorage';

export default function configureStore() {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState, 
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store
}