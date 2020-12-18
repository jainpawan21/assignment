import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import mainReducer from './mainReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['main']
}
const rootReducer = combineReducers({
  main: mainReducer,
});

export default persistReducer(persistConfig, rootReducer);
