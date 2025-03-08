import React from 'react';
import go from '../../assets/go.png';
import go_home from '../../assets/go4_home.png';
import go_about from '../../assets/go4_about.png';
import go_xgeo from '../../assets/go4_xgeo.png';
import go_soon from '../../assets/go4_soon.png';
import go_projs from '../../assets/go4_projs.png';
import gohover from '../../assets/gohover.png';
import { Link } from 'react-router';
import { Path } from '../../constants/Path';

const Sidebar = (): React.ReactElement => {

    const [showHover, setShowHover] = React.useState<boolean>(false);
    const [hoverYPos, setHoverYPos] = React.useState<number>(0);

    const onHover = (index: number) => {
        // setHoverYPos(index*43);
        // setShowHover(true);
    };

    return (
        <div style={{position: 'relative'}}>
            {showHover && <img className='go-button' style={{position: 'absolute', top: hoverYPos+'px', pointerEvents: 'none', opacity: 0.5}} src={gohover}></img>}
            <div style={{position: 'relative'}}>
                <Link to={Path.HOME}><img className='go-button' src={go_home} onMouseEnter={() => onHover(0)} onMouseLeave={() => setShowHover(false)}></img><p className='go-text'></p></Link>
            </div>
            <div style={{position: 'relative'}}>
                <Link to={Path.ABOUT}><img className='go-button' src={go_about} onMouseEnter={() => onHover(1)} onMouseLeave={() => setShowHover(false)}></img><p className='go-text'></p></Link>
            </div>
            <div style={{position: 'relative'}}>
                <Link to={Path.PROJECTS}><img className='go-button' src={go_projs} onMouseEnter={() => onHover(2)} onMouseLeave={() => setShowHover(false)}></img><p className='go-text'></p></Link>
            </div>
            <div style={{position: 'relative'}}>
                <Link to={Path.XGEO}><img className='go-button' src={go_xgeo} onMouseEnter={() => onHover(3)} onMouseLeave={() => setShowHover(false)}></img><p className='go-text'></p></Link>
            </div>
            <div style={{position: 'relative'}}>
                <Link to={Path.SOON}><img className='go-button' src={go_soon} onMouseEnter={() => onHover(4)} onMouseLeave={() => setShowHover(false)}></img><p className='go-text'></p></Link>
            </div>
        </div>
    );
};

export default Sidebar;
