import React from "react";
import downarrow from "../../../assets/downarrow.png";
import HostView from "./HostView";
import PlayerView from "./PlayerView";


enum AniguessrView {
    START = "start",
    HOST = "host",
    PLAYER = "player"
}

export const Aniguessr = (): React.ReactElement => {
    const [view, setView] = React.useState<AniguessrView>(AniguessrView.START);

    const getButton = (label: string, targetView: AniguessrView) => {
        return (<div onClick={() => setView(targetView)} style={{cursor: 'pointer', textDecoration: 'none'}}>
            <img src={downarrow} alt={label} style={{margin: '10px', verticalAlign: 'middle', scale: '200%', transform: 'rotate(270deg)', imageRendering: 'pixelated'}} />
            <span style={{fontSize: '20px', color: 'black', verticalAlign: 'middle', marginLeft: '10px'}}>{label}</span>
        </div>);
    }

    return (view === AniguessrView.START ? <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <p style={{fontFamily: 'DOS, basiic, sans-serif', fontSize: '40px'}}>Aniguessr</p>
        <div style={{alignItems: 'left', display: 'flex', flexDirection: 'column'}}>
            {getButton('Host Game', AniguessrView.HOST)}
            {getButton('Join Game', AniguessrView.PLAYER)}
        </div>
    </div> : (view === AniguessrView.HOST ? <HostView /> : <PlayerView />));
}

export default Aniguessr;
