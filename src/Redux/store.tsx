import { createStore, applyMiddleware, Dispatch } from 'redux';
import { rootReducer } from './Reducers'; // root reducer

const store = createStore(rootReducer);

export { store };
