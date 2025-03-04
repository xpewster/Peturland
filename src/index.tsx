import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Frame from './components/Frame';
import { Path } from './constants/Path';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={Path.HOME} replace />} />
        <Route path={Path.HOME} element={<Frame path={Path.HOME} />} />
        <Route path={Path.ABOUT} element={<Frame path={Path.ABOUT} />} />
        <Route path={Path.PROJECTS} element={<Frame path={Path.PROJECTS} />} />
        <Route path={Path.XGEO} element={<Frame path={Path.XGEO} />} />
        <Route path={Path.XGEO_US} element={<Frame path={Path.XGEO_US} />} />
        <Route path={Path.XGEO_BR} element={<Frame path={Path.XGEO_BR} />} />
        <Route path={Path.SOON} element={<Frame path={Path.SOON} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
