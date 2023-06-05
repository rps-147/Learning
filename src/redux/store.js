import { configureStore, applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./index";
import rootSaga from "./saga/index";

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTEN,
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;