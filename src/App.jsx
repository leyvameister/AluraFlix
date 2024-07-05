import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Modal from 'react-modal';
import Layout from './page/Layout/Layout';
import Home from './page/Home/Home';
import NewVideo from './page/NewVideo/NewVideo';

Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/newvideo" element={<NewVideo />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;