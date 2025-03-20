import peturshell from '../../assets/peturshell.png';
import back from '../../assets/gifs/back.gif';
import { Link, useNavigate } from 'react-router';

export interface StandaloneProps {
    children: React.ReactNode;
    backToTopButton?: boolean;
}

export const Standalone = ({
    children,
    backToTopButton = false,
}: StandaloneProps): React.ReactElement => {

    const nav = useNavigate();

    const scrollToTop = (e: any) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
        });
    };
    
    return <div>
        <a id="top" style={{top: '0'}}></a>
        <Link to="/" onClick={() => {nav(-1)}} style={{textDecoration: 'none', color: 'black'}}>
            <img src={peturshell} style={{imageRendering: 'pixelated', height: '100px'}}></img>
            <img src={back} style={{imageRendering: 'pixelated', height: '50px'}}></img>
        </Link>
        <hr></hr>
        {children}
        <hr></hr>
        {backToTopButton && <a href="#top" onClick={scrollToTop} style={{paddingLeft: '10px'}}>Back to top</a>}
        <p> (C) Peturland 2025</p>
    </div>;
}

export default Standalone;
