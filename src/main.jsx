import LoadingProvider from 'hooks/useLoading';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from 'store/store';
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <LoadingProvider>
      <App />
      <ToastContainer autoClose={2000} newestOnTop />
    </LoadingProvider>
  </Provider>
);
