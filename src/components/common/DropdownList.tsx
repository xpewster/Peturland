import React, { useState } from 'react';
import dropdownButton from '../../assets/downarrow.png';

export interface DropdownListProps {
    titles: string[];
    components: React.ReactNode[];
    hrWidth?: string;
    enableFirstByDefault?: boolean;
}

const DropdownList: React.FC<DropdownListProps> = (props: DropdownListProps) => {

    const [droppedDowns, setDroppedDowns] = useState<boolean[]>([]);

    // Populate the initial state
    React.useEffect(() => {
        if (props.enableFirstByDefault) {
            setDroppedDowns([true, ...Array(props.titles.length - 1).fill(false)]);
        } else {
            setDroppedDowns(Array(props.titles.length).fill(false));
        }
    }, []);

    const handleDropdownClick = (index: number) => {
        const newDroppedDowns = [...droppedDowns];
        newDroppedDowns[index] = !newDroppedDowns[index];
        setDroppedDowns(newDroppedDowns);
    };

    return (
        <div style={{width: '100%'}}>
            {props.titles.map((title, index) => (
                <div key={index} style={{marginBottom: '10px', position: 'relative'}}>
                    <div 
                        onClick={() => handleDropdownClick(index)} 
                        style={{
                            cursor: 'pointer', 
                            marginBottom: '0px',
                            userSelect: 'none',
                            padding: '5px 0'
                        }}
                    >
                        <b style={{marginLeft: '5px'}}>{title}</b>
                        <img 
                            src={dropdownButton} 
                            alt="Dropdown" 
                            style={{
                                display: 'inline-block', 
                                marginLeft: '3px', 
                                verticalAlign: 'middle', 
                                marginBottom: '2px',
                                transform: droppedDowns[index] ? 'rotate(180deg)' : 'rotate(0deg)',
                                pointerEvents: 'none'
                            }} 
                        />
                    </div>
                    <hr style={{marginTop: '0px', width: props.hrWidth || '95%', pointerEvents: 'none'}}></hr>
                    {droppedDowns[index] && (
                        <div style={{width: '100%', position: 'relative'}}>
                            {props.components[index]}
                            {/* <hr style={{width: '95%'}}></hr> */}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DropdownList;