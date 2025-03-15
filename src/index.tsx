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
        {
          Object.keys(Path).map((key) => {
            return <Route key={key} path={Path[key as keyof typeof Path]} element={<Frame path={Path[key as keyof typeof Path]} />} />
          })
        }
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
