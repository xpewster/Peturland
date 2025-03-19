import { Link } from "react-router";

export const LINK_HOVER_COLOR: string = "#c7dcff";
export const LINK_CLICK_COLOR: string = "#0062ff";

export interface FileboxProps {
    imageSrcs: any[];
    strings: string[];
    links: any[];
    onClick: () => void;
}

const Filebox = (props: FileboxProps): React.ReactElement => {

    const ITEM_HEIGHT = '24px';

    const getFileboxItem = (src: any, text: string, link: any): React.ReactElement => {
        return (
            <Link to={link} onClick={props.onClick} style={{width: '100%', height: ITEM_HEIGHT, textDecoration: 'none', color: 'black'}}>
                <div className="fileboxitem" style={{width: '100%', height: ITEM_HEIGHT, whiteSpace: 'nowrap', display: 'flex'}}>
                    <img src={src} style={{width: '18px', height: '18px', padding: '2px'}}></img>
                    <p className="fileboxlink" style={{paddingLeft: '26px', paddingTop: '3px', height: ITEM_HEIGHT}}>{text}</p>
                </div>
            </Link>
        );
    }


    return (
        <div style={{width: '200px', backgroundColor: 'white', boxShadow: 'inset -2px -2px #716F64, inset 1px 1px #ECE9D8, inset 2px 2px #ffffff, inset 3px 3px #ECE9D8, inset -3px -3px #ACA899, inset -4px -4px #ECE9D8, inset -1px -1px #002B55'}}>
            {props.imageSrcs.map((src, i) => {
                if (i === 2) {
                    return (
                        <>
                            <hr style={{width: '92%', color: '#ACA899', zIndex: 15, marginTop: '4px', marginBottom: '4px'}}></hr>
                            {getFileboxItem(src, props.strings[i], props.links[i])}
                        </>
                    )
                }
                return getFileboxItem(src, props.strings[i], props.links[i])
            })}
        </div>
    );
}

export default Filebox;
