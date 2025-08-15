import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import NotificationProvider from '../NotificationProvider'

function App() {

  return (
    <React.StrictMode>
      <NotificationProvider>
        <ToastPlayground />
      </NotificationProvider>
      <Footer />
    </React.StrictMode>
  );
}

export default App;
