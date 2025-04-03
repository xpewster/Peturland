import React from 'react';
import cool from '../../assets/fileboxicons/cool.gif';

export type DatedComponent = [string, React.ReactElement, string?];

export interface DatedComponentListProps {
    datedComponents: DatedComponent[];
}

const DatedComponentList = (props: DatedComponentListProps) => {
    return <div>
        {props.datedComponents.map(([date, component, description], index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
                <p><span style={{textDecoration: 'underline', fontWeight: 'bold'}}>{date}:</span> <span>{description?.split("\n").map(
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
