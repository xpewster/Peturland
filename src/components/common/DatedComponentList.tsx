export type DatedComponent = [string, React.ReactElement, string?];

export interface DatedComponentListProps {
    datedComponents: DatedComponent[];
}

const DatedComponentList = (props: DatedComponentListProps) => {
    return <div>
        {props.datedComponents.map(([date, component, description], index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
                <p><span style={{textDecoration: 'underline', fontWeight: 'bold'}}>{date}:</span> <span>{description?.split("\n").map(
                    (line, i) => <span key={i} style={{paddingLeft: (i > 0) ? '92px' : undefined}}>{line}<br /></span>
                )}</span></p>
                {component}
                {(index < props.datedComponents.length - 1) && <hr style={{width: '90%', color: 'darkgoldenrod', opacity: '50%'}}></hr>}
            </div>
        ))}
    </div>;
};

export default DatedComponentList;
