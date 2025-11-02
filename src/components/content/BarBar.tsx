import { Link } from 'react-router';
import bar from '../../assets/bar.png'; 
import { Path } from '../../constants/Path';

const BarBar = (): React.ReactElement => {
    return <div style={{height: '180px', position: 'relative'}}>
        <Link to={Path.ABOUT + "#links"}><img style={{display: 'block', position: 'absolute', top: '30px', left: '-180px', clipPath: 'rect(0px 100% 100% 102px)'}} src={bar}></img>
        <p className='bartext' style={{position: 'absolute', top: '20px', left: '20px'}}>Links</p></Link>
        <Link to={Path.ANNOUNCEMENTS}><img style={{display: 'block', position: 'absolute', top: '70px', left: '-160px', clipPath: 'rect(0px 100% 100% 102px)'}} src={bar}></img>
        <p className='bartext' style={{position: 'absolute', top: '60px', left: '20px'}}>Announcements</p></Link>
        <Link to={Path.SUPPORT}><img style={{display: 'block', position: 'absolute', top: '110px', left: '-180px', clipPath: 'rect(0px 100% 100% 102px)'}} src={bar}></img>
        <p className='bartext' style={{position: 'absolute', top: '100px', left: '20px'}}>web support</p></Link>
        <Link to={Path.TRAVEL_LOG}><img style={{display: 'block', position: 'absolute', top: '150px', left: '-200px', clipPath: 'rect(0px 100% 100% 102px)'}} src={bar}></img>
        <p className='bartext' style={{position: 'absolute', top: '140px', left: '20px'}}>travel log</p></Link>
    </div>;
}

export default BarBar;
