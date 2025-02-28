// https://stackoverflow.com/questions/55508836/prevent-page-scrolling-when-mouse-is-over-one-particular-div
import React from 'react';
import {isMobile} from 'react-device-detect';

const ScrollingDisabler = (props: any): React.ReactElement => {

    function changeScroll (){ 
        let style = document.body.style.overflowY 
        document.body.style.overflowX = 'hidden';
        document.body.style.overflowY = (style === 'hidden') ? 'auto' : 'hidden';
        document.body.style.paddingRight = (style === 'hidden') ? '0px' : '17px';
    } 

    return (
        !isMobile ?
        <div 
            onMouseEnter={changeScroll} 
            onMouseLeave={changeScroll}
        > 
            {props.children}
        </div>
        : <>{props.children}</>
    );
};

export default ScrollingDisabler;
