import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import Reducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
      Reducer
    ],
    blacklist: [],
  };

const persistedReducer = persistReducer(persistConfig, Reducer);
const logger = createLogger();
const store = createStore(persistedReducer, 
    applyMiddleware(logger))
    
let persistor = persistStore(store);

export {store, persistor};