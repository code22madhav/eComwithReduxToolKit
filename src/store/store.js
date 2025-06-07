// import { compose, createStore, applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store= configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(middleWares)
})
/*configureStore comes with default 3 middlewares one of them is thunk so if we pass any middleware
expilcitly it replace the existing one, 
2nd middleware is serializableStateInvariantMiddleware
3rd middleware is for immutabilty: it gives us warning if we are directly accesssing the state value
somewhere and trying to mutate it for example state.user.currentUser=madhav this will through err
IMPO THING TO LEARN:
#1 if you directly run the store and don't pass any middleware then this serialize check will run and throw us 
an error that the object we are receving from firebase auth is not a plain object it is something
like non-serialzed object which contains classes instances or function therefore to remidiate this error
we can either set the serialablecheck as false or we will make sure that the data which we are dispatching
to setCurrentUser should be a plain object, either we will tackle this here or if not here then while 
dispatching the state data in app.js. Note: because of this error our app will not crash it's a kind 
of warning you can say. Currently we are tackling this issues from app.js by sending serialzes data
otherwise you can do this getDefaultMiddleware({serialzationcheck: false}).concat(middleware)
#2 this configureStore gives us a helperfunction to getDafault middleware which we are catching
inside a arrow function and which we are calling this will return us an array. So we can modify 
our middleware in such a way that what is there as default middleware we can set true or false 
and we can add anything on top of it using .concat because this helperfunction returns us 
an array and we can use .concat array property. we can name this getDefaultmiddleware or anything else
*/


// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistor = persistStore(store);
