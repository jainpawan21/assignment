import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development" ? composeWithDevTools() : null
);

export const persistor = persistStore(store);
