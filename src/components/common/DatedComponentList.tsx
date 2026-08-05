import React from 'react';
import cool from '../../assets/fileboxicons/cool.gif';
import folderico from '../../assets/fileboxicons/folder.png';
import star from '../../assets/gifs/star3.gif';

export type DatedComponent = [string, React.ReactElement, string?];

export interface DatedComponentListProps {
    datedComponents: DatedComponent[];
    centered?: boolean;
    dateTextStyle?: React.CSSProperties;
    navigation?: boolean;
}

const DatedComponentList = (props: DatedComponentListProps) => {
    return <div>
        {props.navigation && (
            <nav style={{
                position: 'fixed',
                top: '120px',
                right: '20px',
                zIndex: 10,
            }}>
                <div style={{fontWeight: 'bold', marginBottom: '5px', border: '1px solid black', padding: '5px', backgroundColor: 'white', width: '180px', height: '225px', overflowY: 'auto'}}>
                    <span style={{textDecoration: 'underline', textAlign: 'center', display: 'block'}}><img src={star} alt="star" style={{imageRendering: 'pixelated', verticalAlign: 'middle', marginRight: '5px'}} />Navigation</span>
                    <hr style={{margin: '5px 0', color: 'black'}}></hr>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {props.datedComponents.map(([date]) => (
                            <li key={date}>
                                <a href={`#i${date}`}><img src={folderico} alt="folder" style={{imageRendering: 'pixelated', verticalAlign: 'middle', marginRight: '5px'}} />{date}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        )}

        {props.datedComponents.map(([date, component, description], index) => (
            <div key={index} id={`i${date}`} style={{ marginBottom: '20px', scrollMarginTop: '40px' }}>
                <p style={{ textAlign: props.centered ? 'center' : 'inherit'}}><span style={{textDecoration: 'underline', fontWeight: 'bold', ...props.dateTextStyle}}>{date}:</span> <span>{description?.split("\n").map(
                    (line, i) => {
                        const segments = line.split(":cool:");
                        return (
                        <span key={i} style={{paddingLeft: (i > 0) ? '92px' : undefined}}>
                            {segments.map((segment, j) => (
                            <React.Fragment key={j}>
                                {segment}
                                {j < segments.length - 1 && <img src={cool} alt="cool" style={{imageRendering: 'pixelated', verticalAlign: 'middle'}} />}
                            </React.Fragment>
                            ))}
                            <br />
                        </span>
                        );
                    }
                )}</span></p>
                {component}
                {(index < props.datedComponents.length - 1) && <hr style={{width: '90%', color: 'darkgoldenrod', opacity: '50%'}}></hr>}
            </div>
        ))}
    </div>;
};

export default DatedComponentList;