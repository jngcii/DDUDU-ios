import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';
import todoList from './modules/todoList';
import AsyncStorage from '@react-native-community/async-storage';

export default function configureStore() {

  const reducer = combineReducers({
    todoList,
  })

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }

  const persistedReducer = persistReducer(persistConfig, reducer);
  
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  // const enhancers = [middlewareEnhancer];
  // const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(persistedReducer, undefined, middlewareEnhancer);
  const persistor = persistStore(store);

  return { store, persistor };
}