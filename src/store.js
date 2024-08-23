import { configureStore, combineReducers } from "@reduxjs/toolkit";
import colorReducer from "./features/colorSlice";
import characterReducer from "./features/characterSlice";
import nameReducer from "./features/nameSlice";
import keywordReducer from "./features/keywordSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userSlice from "./features/userSlice";
import logger from "redux-logger";
import {
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  PAUSE,
  FLUSH,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  color: colorReducer,
  character: characterReducer,
  name: nameReducer,
  keyword: keywordReducer,
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, PURGE, REGISTER, REHYDRATE, PAUSE, FLUSH],
      },
    }).concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
