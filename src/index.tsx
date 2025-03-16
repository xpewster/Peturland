import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Frame from './components/Frame';
import { Path } from './constants/Path';
import Credits from './components/standalone/Credits';
import Digicam from './components/standalone/digicam';
import EightyEight from './components/standalone/88x31';

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
            if ([Path.CREDITS, Path.DIGICAM, Path.EIGHTYEIGHT].includes(Path[key as keyof typeof Path])) {
              return;
            }
            return <Route key={key} path={Path[key as keyof typeof Path]} element={<Frame path={Path[key as keyof typeof Path]} />} />
          })
        }
        <Route path={Path.CREDITS} element={<Credits/>} />
        <Route path={Path.DIGICAM} element={<Digicam />} />
        <Route path={Path.EIGHTYEIGHT} element={<EightyEight />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
