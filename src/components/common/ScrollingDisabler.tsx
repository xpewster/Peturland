import React, { useEffect } from 'react';

const ScrollingDisabler = (props: any): React.ReactElement => {

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
