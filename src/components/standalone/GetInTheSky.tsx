import React from "react";
import Standalone from "./Standalone"
import { Link } from "react-router";
import { Path } from "../../constants/Path";
import { AvailableFonts } from "../dso/InTheSky";

export const GetInTheSky = (): React.ReactElement => {

    const [src, setSrc] = React.useState<string>('/InTheSky?hemisphere=north');

    const [hemisphere, setHemisphere] = React.useState<'north' | 'south'>('north');
    const [date, setDate] = React.useState<string | undefined>(undefined);
    const [bgColor, setBgColor] = React.useState<string | undefined>(undefined);
    const [textColor, setTextColor] = React.useState<string>('5c5c5c');
    const [width, setWidth] = React.useState<number>(130);
    const [objectFont, setObjectFont] = React.useState<string>(AvailableFonts.BASIIC);

    const [code, setCode] = React.useState<string>(`<iframe src="https://peturland.com/InTheSky?hemisphere=north" width="130px" height="195px" style="border: none; overflow: hidden;"></iframe>`);

    React.useEffect(() => {
        let newSrc = `/InTheSky?hemisphere=${hemisphere}`; 
        if (date) {
            newSrc += `&date=${date}`;
        }
        if (bgColor) {
            newSrc += `&bgColor=${bgColor}`;
        }
        if (textColor) {
            newSrc += `&textColor=${textColor}`;
        }
        if (width) {
            newSrc += `&width=${width}`;
        }
        if (objectFont !== AvailableFonts.BASIIC) {
            newSrc += `&objectFont=${objectFont}`;
        }
        setSrc(newSrc);
        setCode(`<iframe src="https://peturland.com${newSrc}" width="${width}px" height="${Math.ceil(195 * (width/130))}px" style="border: none; overflow: hidden;"></iframe>`);
    }, [hemisphere, date, bgColor, textColor, width, objectFont]);
    
    return <Standalone>
        <div style={{paddingLeft: '10px'}}>
            <p>
                The widget's still a work in progress, but it works mostly for now. I'm still adding more objects and such~
            </p>
            <hr className="standalonehr"/>
            <iframe 
                src={src}
                width={`${width}px`}
                height={`${Math.ceil(195 * (width/130))}px`}
                style={{border: 'none', overflow: 'scroll', paddingLeft: '50px'}}
                title="Tonight's Visible Object"
            ></iframe>
            {/* <InTheSky 
                hemisphere={hemisphere}
                date={date} 
                bgColor={bgColor} 
                textColor={textColor} 
                width={width} 
                height={height}
            /> */}
            <hr className="standalonehr"/>
            <div style={{border: 'dashed 1px darkgoldenrod', padding: '10px', display: 'inline', marginRight: '5px'}}>
            <p style={{display: 'inline'}}>Hemisphere: <select
                    value={hemisphere} 
                    onChange={(e) => setHemisphere(e.target.value as 'north' | 'south')} 
                    style={{width: '100px', height: '30px', padding: '0', cursor: 'pointer', verticalAlign: 'middle'}} 
                    title="Select Hemisphere"
                >
                    <option value="north">North</option>
                    <option value="south">South</option>
                </select>
            </p>
            </div>
            <div style={{border: 'dashed 1px darkgoldenrod', padding: '10px', display: 'inline', marginRight: '5px'}}>
            <p style={{display: 'inline'}}>Background color: <input
                    type="color" 
                    value={bgColor ? ('#' + bgColor) : '#ffffff'} 
                    onChange={(e) => setBgColor(e.target.value.replace('#', ''))} 
                    style={{width: '100px', height: '30px', padding: '0', cursor: 'pointer', verticalAlign: 'middle'}} 
                    title="Background Color"
                ></input> transparent<input
                    type="checkbox"
                    value={bgColor === undefined ? 'checked' : ''}
                    onChange={(e) => {
                        if (e.target.checked) {
                            setBgColor(undefined);
                        } else {
                            setBgColor('ffffff'); // Reset to default if unchecked
                        }
                    }}
                    style={{verticalAlign: 'middle'}} >
                </input>
            </p>
            </div>
            <div style={{border: 'dashed 1px darkgoldenrod', padding: '10px', display: 'inline', marginRight: '5px'}}>
            <p style={{display: 'inline'}}>Text color: <input
                    type="color" 
                    value={'#' + textColor} 
                    onChange={(e) => setTextColor(e.target.value.replace('#', ''))} // Remove the '#' for consistency in state
                    style={{width: '100px', height: '30px', padding: '0', cursor: 'pointer', verticalAlign: 'middle'}} 
                    title="Text Color"
                ></input>
            </p>
            </div>
            <div style={{border: 'dashed 1px darkgoldenrod', padding: '10px', display: 'inline', marginRight: '5px'}}>
            <p style={{display: 'inline'}}>Width: <input
                    type="number" 
                    value={width} 
                    onChange={(e) => setWidth(parseInt(e.target.value, 10))} 
                    style={{width: '100px', height: '30px', padding: '0', cursor: 'pointer', verticalAlign: 'middle', fontFamily: 'basiic'}} 
                    title="Width"
                ></input>
            </p>
            </div>
            <div style={{border: 'dashed 1px darkgoldenrod', padding: '10px', display: 'inline', marginRight: '5px'}}>
            <p style={{display: 'inline', }}>Font: <select
                    value={objectFont} 
                    onChange={(e) => setObjectFont(e.target.value)} 
                    style={{fontFamily: objectFont, fontSmooth: 'never', WebkitFontSmoothing: 'none', width: '100px', height: '30px', padding: '0', cursor: 'pointer', verticalAlign: 'middle'}} 
                    title="Select Font"
                >
                    <option style={{fontFamily: 'basiic'}} value={AvailableFonts.BASIIC}>Basiic</option>
                    <option style={{fontFamily: 'DOS'}} value={AvailableFonts.DOS}>DOS</option>
                </select>
            </p>
            </div>
            <hr className="standalonehr"/>
            <p>Put this code into your html on your website!</p>
            <textarea value={code} style={{width: '300px', resize: 'none', display: 'block'}}></textarea>
            <button
                onClick={() => {
                    // Copy the code to clipboard
                    navigator.clipboard.writeText(code).then(() => {
                        alert('Copied to clipboard!');
                    }, (err) => {
                        alert('Failed to copy: ' + err);
                    });
                }}
                style={{padding: '5px', cursor: 'pointer', fontFamily: 'basiic'}}
            >Copy to clipboard</button>
            <Link to={Path.SUPPORT} style={{paddingLeft: '10px'}} >Report a bug or request an option</Link>
        </div>
    </Standalone>;
}

export default GetInTheSky;
