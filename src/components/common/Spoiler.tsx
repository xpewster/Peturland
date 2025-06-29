import React from "react";
import './XP.css'; 

export interface SpoilerProps {
    children: React.ReactNode;
    oneAndDone?: boolean;
    hiddenText?: string;
    openText?: string;
}

const Spoiler = (props: SpoilerProps): React.ReactElement => {
    const [open, setOpen] = React.useState(false);

    const toggleSpoiler = () => {
        setOpen(!open);
    };

    return (
        <div>
            {
                !(props.oneAndDone && open) &&
                <button className="xp-button" onClick={toggleSpoiler} style={{ marginBottom: '10px', cursor: 'pointer', height: '23px', width: '75px', fontFamily: 'monospace' }}>
                    {open ? props.openText || "Hide" : props.hiddenText || "Show"}
                </button>
            }
            {open && props.children}
        </div>
    )
}

export default Spoiler;
