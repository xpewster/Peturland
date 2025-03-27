import { useEffect, useRef, useState } from "react";
import portw from '../../../assets/portw.png';
import folder from '../../../assets/fileboxicons/folder.png';
import filebox from '../../../assets/filebox.png';

export interface ProjectWindowProps {
    fileboxImgs?: string[];
    fileboxStrings?: string[];
    fileboxLinks?: string[];
    fileboxStyles?: React.CSSProperties[];
    fileboxExternal?: boolean[];
    projectName: string;
    playLink?: string;
    sourceLink?: string;
    images: any;
    text?: React.ReactElement;
}

const ProjectWindow = (props: ProjectWindowProps): React.ReactElement => {
    const scrollableRef = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState<number>(0);

    // useEffect(() => {
    // const scrollableDiv = scrollableRef.current;

    // if (!scrollableDiv) return;

    // const handleWheel = (e: WheelEvent) => {
    //     // Check if we need to scroll (when at top or bottom)
    //     const { scrollTop, scrollHeight, clientHeight } = scrollableDiv;
    //     const isAtTop = scrollTop === 0;
    //     const isAtBottom = scrollTop + clientHeight >= scrollHeight;
        
    //     // Only prevent default if:
    //     // - Scrolling up and not at the top, or
    //     // - Scrolling down and not at the bottom
    //     if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
    //     e.preventDefault();
    //     }
    // };

    // scrollableDiv.addEventListener('wheel', handleWheel, { passive: false });

    // return () => {
    //     scrollableDiv.removeEventListener('wheel', handleWheel);
    // };
    // }, []);

    const handleClick = (index: number) => {
        switch (index) {
            case 0:
                if (scrollableRef.current) {
                    const aboutElement = scrollableRef.current.querySelector('#about' + props.projectName) as HTMLElement;
                    
                    if (aboutElement) {
                      // Get the position of the about element relative to the scrollable container
                      const aboutPosition = aboutElement.getBoundingClientRect().top - 
                                            scrollableRef.current.getBoundingClientRect().top + 
                                            scrollableRef.current.scrollTop;
                      
                      // Scroll to that position
                      scrollableRef.current.scrollTo({ 
                        top: aboutPosition, 
                      });
                      setPos(aboutPosition)
                    }
                  }
                break;
            case 1:
                break;
            case 2:
                break;
        }
    };

    return (
        <div style={{position: 'relative', marginBottom: '10px'}}>
            <img src={portw} alt="Projects"/>
            <p style={{position: 'absolute', top: '-5px', left: '10px', color: 'white', fontFamily: 'Bangalore'}}>{props.projectName}</p>
            <div ref={scrollableRef} className='scrollable-content' style={{position: 'absolute', top: '30px', left: '4px', width: '314px', height: '214px', overflowY: 'scroll', overflowX: 'hidden'}}>
                <div style={{ 
                    position: 'sticky', 
                    top: 0, 
                    width: '100%',
                    zIndex: 0,
                    height: '20px'
                }}>
                    <img src={filebox} style={{position: 'absolute'}} />
                    <div style={{left: '20px'}} onClick={() => handleClick(0)} className='fileboxlink top'><p className='fileboxlink top'>About</p></div>
                    {
                        props.playLink && 
                        <a href={props.playLink} target="_blank" rel="noopener noreferrer" style={{left: '70px'}} onClick={() => handleClick(1)} className='fileboxlink top'><p className='fileboxlink top'>Play demo</p></a>
                    }
                    {
                        props.sourceLink && <a href={props.sourceLink} target="_blank" rel="noopener noreferrer" style={{left: props.playLink ? '150px' : '70px'}} onClick={() => handleClick(2)} className='fileboxlink top'><p className='fileboxlink top'>Source</p></a>
                    }
                </div>
                {
                    props.images.map((image: any, index: number) => (
                        <img key={index} src={image} style={{width: '100%', height: 'auto', margin: 0, imageRendering: 'pixelated'}} />
                    ))
                }
                <div id={'about' + props.projectName} style={{padding: '10px'}}>
                    {
                        props.text
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectWindow;