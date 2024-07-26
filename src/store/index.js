import { configureStore } from "@reduxjs/toolkit"; 
 
const { default: rootReducer } = require("./rootReducers");

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializablecheck: false,
    });
  },
  devTools: true,
});


export default store;

 