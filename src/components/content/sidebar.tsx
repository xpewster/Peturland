import React from 'react';
import go from '../../assets/go.png';
import go_home from '../../assets/test/button__ALT.png';
import go_about from '../../assets/test/button__ALT.png';
import go_xgeo from '../../assets/test/button__ALT.png';
import go_soon from '../../assets/test/button__ALT.png';
import go_projs from '../../assets/test/button__ALT.png';
import gohover from '../../assets/test/ezgif-4e4cbf7f8b42cb.gif';
import { Link } from 'react-router';
import { Path } from '../../constants/Path';

const Sidebar = (): React.ReactElement => {

    const [srcs, setSrcs] = React.useState<string[]>([go_home, go_about, go_projs, go_xgeo, go_soon]);

    const onHover = (index: number) => {
        setSrcs(srcs.map((src, i) => i === index ? gohover : [go_home, go_about, go_projs, go_xgeo, go_soon][i]));
    };

    const onUnhover = (index: number) => {
        setSrcs(srcs.map((src, i) => i === index ? [go_home, go_about, go_projs, go_xgeo, go_soon][i] : src));
    };

    return (
        <div style={{position: 'relative'}}>
            <div style={{position: 'relative'}}>
                <Link to={Path.HOME}><img className='go-button' src={srcs[0]} onMouseEnter={() => onHover(0)} onMouseOut={() => onUnhover(0)}></img><p className='go-text'></p></Link>
            </div>
            <div style={{position: 'relative'}}>
                <Link to={Path.ABOUT}><img className='go-button' src={srcs[1]} onMouseEnter={() => onHover(1)} onMouseOut={() => onUnhover(1)}></img><p className='go-text'></p></Link>
            </div>
            <div style={{position: 'relative'}}>
                <Link to={Path.PROJECTS}><img className='go-button' src={srcs[2]} onMouseEnter={() => onHover(2)} onMouseOut={() => onUnhover(2)}></img><p className='go-text'></p></Link>
            </div>
            <div style={{position: 'relative'}}>
                <Link to={Path.XGEO_US}><img className='go-button' src={srcs[3]} onMouseEnter={() => onHover(3)} onMouseOut={() => onUnhover(3)}></img><p className='go-text'></p></Link>
            </div>
            <div style={{position: 'relative'}}>
                <Link to={Path.SOON}><img className='go-button' src={srcs[4]} onMouseEnter={() => onHover(4)} onMouseOut={() => onUnhover(4)}></img><p className='go-text'></p></Link>
            </div>
        </div>
    );
};

export default Sidebar;
