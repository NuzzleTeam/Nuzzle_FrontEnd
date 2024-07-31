import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userSlice from "./userSlice";
import logger from "redux-logger";
import {
    PERSIST,
    PURGE
} from 'redux-persist'

const persistConfig = {
    key: "root",
    storage,
};

const reducers = combineReducers({
    user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        //미들웨어 작성시 에러 주의
        getDefaultMiddleware(
            {
                serializableCheck: {
                    ignoredActions: [PERSIST, PURGE],
                },
            }
        ).concat(logger)
});

export default store;