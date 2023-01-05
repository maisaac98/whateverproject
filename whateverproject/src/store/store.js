

//where our state lives thru redux, where receive and dispatch actions into reducers to update state 
//this is where the store object will be stored 

import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

//root-reducer is one big reducer that has all the combined reducers

//middleware is an action that runs before it hits the reducers. 
//using logger to see state before and after reducers within the middleware
const middleWares = [logger]; //process.env.NODE_ENV tells us if we are in environment in node, so we do not log anything if in case logger ships post production

const composeEnhancers = compose(applyMiddleware(...middleWares)); //just a function we need when there are multiple middleWares left to right. 
//there are different enhancers we can have, middleware being one of them 

const persistConfig = {
    key: 'root',
    storage, //this is the shorthand for storage: storage;
    whitelist: ['user'] //for any values that you do not want to persist in local storage 
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composeEnhancers);
//first param is rootReducer, we can now use the persistedReducer as our reducer

export const persistor = persistStore(store);