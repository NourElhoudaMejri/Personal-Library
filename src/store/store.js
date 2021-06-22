import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import booksReducer from './slices/bookSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { books: booksReducer },
 // middleware: [sagaMiddleware]
 middleware: (getDefaultMiddleware) =>
 getDefaultMiddleware({thunk: false}).concat 
 (sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

export default store;
