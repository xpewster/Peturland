import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Frame from './components/Frame';
import { Path } from './constants/Path';
import Credits from './components/standalone/Credits';
import Digicam from './components/standalone/digicam';
import EightyEight from './components/standalone/88x31';
import Visitors from './components/standalone/Visitors';
import Support from './components/standalone/Support';
import PatchNotes from './components/standalone/PatchNotes';
import TravelLog from './components/standalone/TravelLog';
import UnderConstructionStandalone from './components/standalone/UnderConstructionStandalone';
import EmbeddableWidget from './components/dso/EmbeddableWidget';
import GetInTheSky from './components/standalone/GetInTheSky';
import Sitemap from './components/standalone/Sitemap';
import { ArtFullSize } from './components/standalone/ArtFullSize';
import Art from './components/content/projects/portfolios/Art';

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
            if ([Path.ART_FULL_SIZE, Path.CREDITS, Path.DIGICAM, Path.ART, Path.EIGHTYEIGHT, Path.VISITORS, Path.SUPPORT, Path.ANNOUNCEMENTS, Path.TRAVEL_LOG, Path.SOON, Path.STARS, Path.IN_THE_SKY, Path.GET_IN_THE_SKY, Path.SITEMAP].includes(Path[key as keyof typeof Path])) {
              return;
            }
            return <Route key={key} path={Path[key as keyof typeof Path]} element={<Frame path={Path[key as keyof typeof Path]} />} />
          })
        }
        <Route path={Path.ART_FULL_SIZE} element={<ArtFullSize />} />
        <Route path={Path.CREDITS} element={<Credits/>} />
        <Route path={Path.DIGICAM} element={<Digicam />} />
        <Route path={Path.ART} element={<Art />} />
        <Route path={Path.EIGHTYEIGHT} element={<EightyEight />} />
        <Route path={Path.VISITORS} element={<Visitors />} />
        <Route path={Path.SUPPORT} element={<Support />} />
        <Route path={Path.ANNOUNCEMENTS} element={<PatchNotes />} />
        <Route path={Path.TRAVEL_LOG} element={<TravelLog />} />
        <Route path={Path.SOON} element={<UnderConstructionStandalone />} />
        <Route path={Path.STARS} element={<UnderConstructionStandalone />} />
        <Route path={Path.IN_THE_SKY} element={<EmbeddableWidget />} />
        <Route path={Path.GET_IN_THE_SKY} element={<GetInTheSky />} />
        <Route path={Path.SITEMAP} element={<Sitemap />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
