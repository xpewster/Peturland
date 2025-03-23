import React, { useEffect } from 'react';
import yoshiwalk from '../../../assets/gifs/yoshiwalk.gif';
import './Chatbox.css'
import { useLocation } from 'react-router';
import { Path } from '../../../constants/Path';
import yoshideath from '../../../assets/audio/yoshideath.mp3';

export const Chatbox = (): React.ReactElement => {

    const location = useLocation();
    const [showYoshi, setShowYoshi] = React.useState<boolean>(true);

    const audio = new Audio(yoshideath);
    audio.volume = 0.1;

    // useEffect(() => {
    //     if (!([Path.HOME.toString(), Path.SOON.toString(), Path.PROJECTS.toString()].includes(location.pathname))) {
    //         setShowYoshi(false);
    //     } else {
    //         setShowYoshi(true);
    //     }
    // }, [location.pathname]);

    const handleClick = () => {
        audio.play();
        setShowYoshi(false);    
    };
  
  return <div style={{position: 'relative'}}>
        {showYoshi && <img src={yoshiwalk} className='yoshi' onClick={handleClick} style={{position: 'absolute', bottom: '-22px', zIndex: 5}} />}
        <div className="iframe-container">
            <div className="scrollable-content">
                <iframe className="embedded-iframe" src="https://peturland.atabook.org"></iframe>
            </div>
        </div>
    </div>
};

export default Chatbox;