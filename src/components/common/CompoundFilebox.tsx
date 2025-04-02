import { useState } from "react";
import { Link } from "react-router";
import Filebox from "./Filebox";
import expand from "../../assets/fileboxicons/expand.png";
import { preloadImage2 } from "./preloadImage";

export const LINK_HOVER_COLOR: string = "#c7dcff";
export const LINK_CLICK_COLOR: string = "#0062ff";

export interface CompoundFileboxProps {
    topImageSrcs: any[];
    topStrings: string[];
    topLinks?: any[];
    topStyles?: React.CSSProperties[];
    topExternals?: boolean[];
    imageSrcs: any[][];
    strings: string[][];
    links: any[][];
    styles?: React.CSSProperties[][];
    externals?: boolean[][];
    onClick: () => void;
}

const CompoundFilebox = (props: CompoundFileboxProps): React.ReactElement => {

    const ITEM_HEIGHT = '24px';

    const [showFilebox, setShowFilebox] = useState<boolean[]>(Array(props.imageSrcs.length).fill(false));
    let ongoingTimeout: NodeJS.Timeout | null = null;

    const handleItemClick = (index: number) => {
        ongoingTimeout && clearTimeout(ongoingTimeout!);
        setShowFilebox(showFilebox.map((val, i) => {if (i === index) { return true; } else { return false; }}));
        preloadImages(props.imageSrcs[index]);
    };

    const handleItemHover = (index: number) => {
        ongoingTimeout && clearTimeout(ongoingTimeout!);
        setShowFilebox(showFilebox.map((val, i) => {if (i === index) { return true; } else { return false; }}));
        preloadImages(props.imageSrcs[index]);
    }

    const handleItemUnhover = (index: number) => {
        ongoingTimeout && clearTimeout(ongoingTimeout!);
        ongoingTimeout = setTimeout(() => {
            setShowFilebox(showFilebox.map((val, i) => {if (i === index) { return false; } else { return val; }}))
        }, 1000);
    };

    const onFileboxClick = () => {
        setShowFilebox(Array(props.imageSrcs.length).fill(false));
        props.onClick();
    };

    const preloadImages = (imageSrcs: any[]) => {
        imageSrcs.forEach((src) => {
            preloadImage2(src);
        });
    };

    const getFileboxItem = (index: number, src: any, text: string, link: any, style?: React.CSSProperties, external?: boolean): React.ReactElement => {
        return (
            !external ?
            <div onClick={() => handleItemClick(index)} onMouseEnter={() => handleItemHover(index)} onMouseLeave={() => handleItemUnhover(index)} style={{position: 'relative', width: '100%', height: ITEM_HEIGHT, textDecoration: 'none', color: 'black'}}>
                <div className="fileboxitem" style={{width: '100%', height: ITEM_HEIGHT, whiteSpace: 'nowrap', display: 'flex'}}>
                    <img src={src} style={{width: '18px', height: '18px', padding: '2px', ...style}}></img>
                    <img src={expand} style={{padding: '2px', position: 'absolute', left: '175px', top: '2px'}}></img>
                    <p className="fileboxlink" style={{paddingLeft: '26px', paddingTop: '3px', height: ITEM_HEIGHT}}>{text}</p>
                </div>
                {showFilebox[index] && 
                    <div style={{position: 'absolute', left: '195px', top: `-4px`, zIndex: 10}} onMouseEnter={() => handleItemHover(index)} onMouseLeave={() => handleItemUnhover(index)} >
                        <Filebox imageSrcs={props.imageSrcs[index]} strings={props.strings[index]} links={props.links[index]} styles={props.styles?.[index]} externals={props.externals?.[index]} onClick={onFileboxClick} child></Filebox>
                    </div>
                }
            </div>
            : <a href={link} target="_blank" onClick={props.onClick} style={{width: '100%', height: ITEM_HEIGHT, textDecoration: 'none', color: 'black'}}>
                <div className="fileboxitem" style={{width: '100%', height: ITEM_HEIGHT, whiteSpace: 'nowrap', display: 'flex'}}>
                    <img src={src} style={{width: '18px', height: '18px', padding: '2px', ...style}}></img>
                    <p className="fileboxlink" style={{paddingLeft: '26px', paddingTop: '3px', height: ITEM_HEIGHT}}>{text}</p>
                </div>
            </a>
        );
    }


    return (
        <div style={{width: '200px', backgroundColor: 'white', boxShadow: 'inset -2px -2px #716F64, inset 1px 1px #ECE9D8, inset 2px 2px #ffffff, inset 3px 3px #ECE9D8, inset -3px -3px #ACA899, inset -4px -4px #ECE9D8, inset -1px -1px #002B55'}}>
            {props.topImageSrcs.map((src, i) => {
                if (i === 2) {
                    return (
                        <>
                            <hr style={{width: '92%', color: '#ACA899', zIndex: 15, marginTop: '4px', marginBottom: '4px'}}></hr>
                            {getFileboxItem(i, src, props.topStrings[i], props.topLinks?.[i], props.topStyles?.[i], props.topExternals?.[i])}
                        </>
                    );
                }
                return getFileboxItem(i, src, props.topStrings[i], props.topLinks?.[i], props.topStyles?.[i], props.topExternals?.[i]);
            })}
        </div>
    );
}

export default CompoundFilebox;
