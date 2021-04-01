import {
  configureStore,
  Reducer,
  Store,
  StoreCreator,
  StoreEnhancer,
  StoreEnhancerStoreCreator,
} from "@reduxjs/toolkit";
import reducer from "./rootreducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

function middlewareSetup(getDefaultMiddleware: (options?: any) => any) {
  return getDefaultMiddleware({
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
    serializableCheck: false,
    immutableCheck: false,
    thunk: false,
  }).concat([sagaMiddleware]);
}

function enhancerSetup(defaultEnhancers: StoreEnhancer<any, any>[]) {
  return defaultEnhancers.concat(monitorReducer);
}
function monitorReducer(
  createStore: StoreCreator
): StoreEnhancerStoreCreator<any, any> {
  return (
    reducer: Reducer<any, any>,
    initialState: any,
    enhancer?: any
  ): Store<any, any> => {
    const monitoredReducer = (state: any, action: any) => {
      const now = performance.now();
      const newState = reducer(state, action);
      const time = Math.round(performance.now() - now);
      console.log(`completed Action ${action.type}`, time);
      return newState;
    };
    return createStore(monitoredReducer, initialState, enhancer);
  };
}

const store = configureStore({
  reducer: reducer,
  middleware: middlewareSetup,
  devTools: true,
  enhancers: enhancerSetup,
});

sagaMiddleware.run(rootSaga);
const storeConfig = {
  store,
};
export default storeConfig;
