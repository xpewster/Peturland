// https://stackoverflow.com/questions/55508836/prevent-page-scrolling-when-mouse-is-over-one-particular-div
import React, { useEffect } from 'react';
import {isMobile} from 'react-device-detect';

const ScrollingDisabler = (props: any): React.ReactElement => {

    // function changeScroll (){ 
    //     let style = document.body.style.overflowY 
    //     document.body.style.overflowX = 'hidden';
    //     document.body.style.overflowY = (style === 'hidden') ? 'auto' : 'hidden';
    //     document.body.style.paddingRight = (style === 'hidden') ? '0px' : '17px';
    // } 

    // return (
    //     !isMobile ?
    //     <div 
    //         onMouseEnter={changeScroll} 
    //         onMouseLeave={changeScroll}
    //     > 
    //         {props.children}
    //     </div>
    //     : <>{props.children}</>
    // );
    const divRef = React.createRef<HTMLDivElement>();

    var passiveSupported = false;
    function makePassiveEventOption() {
        try {
            var options = {
                get passive() {
                    // This function will be called when the browser
                    //   attempts to access the passive property.
                    passiveSupported = true;
                    return false;
                },
            };
            return options;
        }
        catch (err) {
            passiveSupported = false;
            return passiveSupported;
        }
    }

    function handleWheel(event: any) {
        event.preventDefault();
        event.stopPropagation();
    }

    useEffect(() => {
        const passive = makePassiveEventOption();
        divRef.current?.addEventListener("wheel", handleWheel, passive);
        return (() => {
            divRef.current?.removeEventListener("wheel", handleWheel);
        });
    }, []);

    return (
        <div ref={divRef} onWheel={handleWheel}>
            {props.children}
        </div>
    )
};

export default ScrollingDisabler;
