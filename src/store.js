import { configureStore, createStore } from "@reduxjs/toolkit";
import reducer from "./Reducers/CombineReducer";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = { // it  is like labeling a folder in your browser storage 
    key: 'persist-store',//A unique key used as an identifier for storing and retrieving the Redux state from localStorage
    storage //it Specifies the storage mechanism. Here redux-persist/lib/storage/session is used which defaults to localStorage
}

const persistedReduce = persistReducer(persistConfig, reducer) // The persistReducer function wraps the root reducer (CombineReducer) with persistence capabilities. This modified reducer saves its state to localStorage automatically each time the Redux state changes, based on the settings in persistConfig


const store = createStore(persistedReduce) //The main Redux store, created using the persisted reducer. Holds all your app’s data as usual, but now it’s ready to save it in the “safe spot” as you use the app.
export const persistor = persistStore(store) //  Makes sure that when the app reloads, it goes to the “safe spot” to get back any saved data and put it into store again
export default store;