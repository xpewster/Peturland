import React, { useEffect, useRef } from 'react';
import './Chatbox.css'

export const Chatbox = (): React.ReactElement => {

  
  return <div className="iframe-container">
        <div className="scrollable-content">
            <iframe className="embedded-iframe" src="https://peturland.atabook.org"></iframe>
        </div>
    </div>
};

export default Chatbox;