import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './localization/i18n';
import { Provider } from 'react-redux';
import store from './store';
import ModalsController from './components/modals';
import { ToastNotificationsController } from './components/popups';

const root: HTMLDivElement = document.getElementById('root') as HTMLDivElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastNotificationsController />
        <ModalsController />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
