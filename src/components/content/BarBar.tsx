import { Link } from 'react-router';
import bar from '../../assets/bar.png'; 
import { Path } from '../../constants/Path';

const BarBar = (): React.ReactElement => {
    return <div style={{height: '180px'}}>
        <Link to={Path.ABOUT + "#links"}><img style={{display: 'block', position: 'absolute', top: '810px', left: '-160px', clipPath: 'rect(0px 100% 100% 102px)'}} src={bar}></img>
        <p className='bartext' style={{position: 'absolute', top: '800px', left: '40px'}}>Links</p></Link>
        <Link to={Path.ANNOUNCEMENTS}><img style={{display: 'block', position: 'absolute', top: '850px', left: '-140px', clipPath: 'rect(0px 100% 100% 102px)'}} src={bar}></img>
        <p className='bartext' style={{position: 'absolute', top: '840px', left: '40px'}}>Announcements</p></Link>
        <Link to={Path.SUPPORT}><img style={{display: 'block', position: 'absolute', top: '890px', left: '-160px', clipPath: 'rect(0px 100% 100% 102px)'}} src={bar}></img>
        <p className='bartext' style={{position: 'absolute', top: '880px', left: '40px'}}>web support</p></Link>
        <Link to={Path.TRAVEL_LOG}><img style={{display: 'block', position: 'absolute', top: '930px', left: '-180px', clipPath: 'rect(0px 100% 100% 102px)'}} src={bar}></img>
        <p className='bartext' style={{position: 'absolute', top: '920px', left: '40px'}}>travel log</p></Link>
    </div>;
}

export default BarBar;
