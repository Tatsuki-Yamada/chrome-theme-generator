import { HStack, UIProvider } from '@yamada-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Manager/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UIProvider>
      <HStack align="start">
        <App />
      </HStack>
    </UIProvider>
  </React.StrictMode>
);
