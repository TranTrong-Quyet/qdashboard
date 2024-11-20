import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "../src/index.css";

import App from './App.tsx';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import globalReducer from "./store"
import { api } from './store/api';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefault) => getDefault().concat(api.middleware)
})
setupListeners(store.dispatch)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
