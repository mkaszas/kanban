import { createStore, applyMiddleware } from 'redux';
import { save, load } from 'redux-localstorage-simple';
import rootReducer from './reducers';

const namespace = 'mk_sp_kanban';

const createStoreWithMiddleware = applyMiddleware(
  save({ namespace, debounce: 1000 })
)(createStore);

export default createStoreWithMiddleware(
  rootReducer,
  load({ namespace }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
