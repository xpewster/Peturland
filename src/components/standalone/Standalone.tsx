import peturshell from '../../assets/peturshell.png';
import back from '../../assets/gifs/back.gif';
import { Link, useNavigate } from 'react-router';
import { Path } from '../../constants/Path';

export interface StandaloneProps {
    children: React.ReactNode;
    backToTopButton?: boolean;
}

export const Standalone = ({
    children,
    backToTopButton = false,
}: StandaloneProps): React.ReactElement => {

    const nav = useNavigate();

    const handleNavigation = () => {
        try {
            if (window.history.state && window.history.state.idx > 0) {
                nav(-1);
            } else {
                nav(Path.HOME);
            }
        } catch (e) {
            nav(Path.HOME);
        }
    };

    const scrollToTop = (e: any) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
        });
    };
    
    return <div>
        <a id="top" style={{top: '0'}}></a>
        <Link to={Path.HOME} onClick={() => {handleNavigation()}} style={{textDecoration: 'none', color: 'black'}}>
            <img src={peturshell} alt='Logo' style={{imageRendering: 'pixelated', height: '100px'}}></img>
            <img src={back} alt='Back' style={{imageRendering: 'pixelated', height: '50px'}}></img>
        </Link>
        <hr></hr>
        {children}
        <hr></hr>
        {backToTopButton && <a href="#top" onClick={scrollToTop} style={{paddingLeft: '10px'}}>Back to top</a>}
        <p> (C) Peturland 2025</p>
    </div>;
}

export default Standalone;
