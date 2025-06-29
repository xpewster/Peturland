import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Content.css';
import Sidebar from './content/sidebar';
import AppWindow, { getContentSize } from './content/AppWindow';
import { ContentType } from '../constants/ContentType';
import Loafer from './content/Loafer';
import Counter from './content/Counter';
import lizard from '../assets/lizardll.gif';
import stars from '../assets/stars.png';
import coco from '../assets/coco.png';
import Rightbar from './content/rightbar';
import { Chatbox } from './content/chatbox/Chatbox';
import BarBar from './content/BarBar';
import underconstruction from '../assets/88x31/construction.gif';
import AppContent from './content/AppContent';
import { Link } from 'react-router';
import { Path } from '../constants/Path';

export interface ContentProps {
  contentType?: ContentType;
}

const Content = (props: ContentProps): React.ReactElement => {
  const [vw, setVw] = useState<number>(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
  const cboxDivRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  

  const scrollChatToBottom = () => {
    if (cboxDivRef.current) {
      cboxDivRef.current.scrollTop = cboxDivRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Try to scroll immediately
    scrollChatToBottom();

    // Try to scroll after a short delay (for initial content)
    const immediateTimeout = setTimeout(scrollChatToBottom, 100);
    
    // Try to scroll after a longer delay (fallback)
    const fallbackTimeout = setTimeout(scrollChatToBottom, 2000);

    // Set up iframe load event listener if possible
    const iframeElement = iframeRef.current;
    if (iframeElement) {
      iframeElement.addEventListener('load', scrollChatToBottom);
    }

    return () => {
      clearTimeout(immediateTimeout);
      clearTimeout(fallbackTimeout);
      if (iframeElement) {
        iframeElement.removeEventListener('load', scrollChatToBottom);
      }
    };
  }, []);

  useLayoutEffect(() => {
    function updateSize() {
        setVw(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
    }
    window.addEventListener('resize', updateSize);
    updateSize();
      
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const scrollToTop = (e: any) => {
      e.preventDefault();
      window.scrollTo({
          top: 0,
      });
  };

  return (
    <div className="cbox">
        <p style={{textAlign: 'left', paddingLeft: '10px'}}>Hi! Welcome to my website. WIP!!</p>
        <img className='sidebar' style={{width: '100%', paddingTop: '0px', paddingBottom: '5px', paddingLeft: '0px'}} src={stars}></img>
        <hr className='barlinedashed'></hr>
        <div style={{width: '100%', height: `${getContentSize(props.contentType ?? ContentType.HOME) + 450}px`, marginBottom: '10px'}}>
          <div className='sidebar'>
            <Sidebar />
            <Loafer />
            <Counter />
            <div style={{position: 'relative'}}>
              {
                (getContentSize(props.contentType ?? ContentType.HOME) > 600) ? <img style={{
                  height: `${Math.min(getContentSize(props.contentType ?? ContentType.HOME), 1500) - 450}px`,
                  imageRendering: 'pixelated',
                  position: 'absolute',
                }} src={lizard}></img> : <></>
              }
            </div>
            <BarBar />
            <div className="iframe-container"  style={{position: 'relative', width: '99%', height: '200px', marginTop: '30px'}}>
              <div id='cboxdiv' ref={cboxDivRef} className='scrollable-content' style={{position: 'relative', width: '100%', height: '100%', overflow: 'scroll', overflowX: 'hidden'}}>
                <iframe ref={iframeRef} src="https://www3.cbox.ws/box/?boxid=3545199&boxtag=zuiIBB" style={{width: '98%', height: '450px'}} allow="autoplay"></iframe>	
              </div>
            </div>
          </div>
          <div style={{marginLeft: '30px', float: 'left', width: '465px', height: `${getContentSize(props.contentType ?? ContentType.HOME) + 450}px`}}>
            {[ContentType.HOME].includes(props.contentType ?? ContentType.HOME) ? <AppContent contentType={props.contentType ?? ContentType.HOME} /> : <AppWindow contentType={props.contentType ?? ContentType.HOME}/>}
            <Chatbox />
          </div>
          <Rightbar contentHeight={getContentSize(props.contentType ?? ContentType.HOME)} />
        </div>
        <div style={{textAlign: 'center', fontSize: '12px', display: 'block', width: '100%'}}><Link className='staticA' to={Path.SITEMAP}>Sitemap</Link> | <Link className='staticA' to={Path.SUPPORT}>Web Support</Link> | <Link className='staticA' to={Path.SUPPORT}>Report a Bug</Link> | <a href='https://neocities.org/browse' target="_blank" rel="noopener noreferrer">Neocities</a> | <Link className='staticA' to={Path.ANNOUNCEMENTS}>Last Updated: June 2025</Link></div>
        <p style={{textAlign: 'center'}}>(C) Peturland 2025 <img src={underconstruction} /></p><a style={{position: 'absolute', right: '20px', display: 'inline-block', bottom: '-5px', height: '20px', fontFamily: 'ibm_vga'}} className='staticA' onClick={scrollToTop} href='/'>^</a>
        <div style={{position: 'fixed', bottom: '-10px', left: '0px', width: '200px', pointerEvents: 'none'}}> 
          <img src={coco} alt='Save Old Homes' style={{width: '100%', pointerEvents: 'none'}}></img>
          <p className='p-dos' style={{position: 'absolute', bottom: '10px', right: '50px', fontSmooth: 'never', color: 'white', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>Coco says to save old homes!</p>
        </div>
    </div>
  );
}

export default Content;
