export interface CompassSelectorProps {
    onDirectionSelected: (direction: string) => void;
    diagonal?: boolean;
}

const CompassSelector = (props: CompassSelectorProps) => {
    return (
        <div>
            {props.diagonal ? 
                <div>
                    <button onClick={() => props.onDirectionSelected("northeast")}>North East</button>
                    <button onClick={() => props.onDirectionSelected("northwest")}>North West</button>
                    <button onClick={() => props.onDirectionSelected("southeast")}>South East</button>
                    <button onClick={() => props.onDirectionSelected("southwest")}>South West</button>
                </div>
                : <div>
                    <button onClick={() => props.onDirectionSelected("north")}>North</button>
                    <button onClick={() => props.onDirectionSelected("south")}>South</button>
                    <button onClick={() => props.onDirectionSelected("east")}>East</button>
                    <button onClick={() => props.onDirectionSelected("west")}>West</button>
                </div>
            }
        </div>
    );
};

/* 
to do: commission compass with shadow similar to 
https://thumbs.dreamstime.com/b/pixel-art-compass-red-needle-pointing-north-white-background-illustration-evokes-world-video-games-338649674.jpg
https://www.reddit.com/r/PixelArt/comments/aafiea/compass/
*/

export default CompassSelector;
