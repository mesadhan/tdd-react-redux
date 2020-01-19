import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers/successReducer';

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(RootReducer)