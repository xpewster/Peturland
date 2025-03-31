import Standalone from "./Standalone";
import P1000709 from '../../assets/standalone/digicam/P1000709.jpg';
import P1000710 from '../../assets/standalone/digicam/P1000710.jpg';
import P1000718 from '../../assets/standalone/digicam/P1000718.jpg';
import P1000723 from '../../assets/standalone/digicam/P1000723.jpg';
import P1000736 from '../../assets/standalone/digicam/P1000736.jpg';
import P1000738 from '../../assets/standalone/digicam/P1000738.jpg';
import P1000746 from '../../assets/standalone/digicam/P1000746.jpg';
import P1000803 from '../../assets/standalone/digicam/P1000803.jpg';
import P1000807 from '../../assets/standalone/digicam/P1000807.jpg';
import P1000821 from '../../assets/standalone/digicam/P1000821.jpg';
import P1000833 from '../../assets/standalone/digicam/P1000833.jpg';
import P1000838 from '../../assets/standalone/digicam/P1000838.jpg';
import P1000849 from '../../assets/standalone/digicam/P1000849.jpg';
import P1000858 from '../../assets/standalone/digicam/P1000858.jpg';
import P1000884 from '../../assets/standalone/digicam/P1000884.jpg';
import P1000886 from '../../assets/standalone/digicam/P1000886.jpg';
import P1000921 from '../../assets/standalone/digicam/P1000921.jpg';


export const Digicam = (): React.ReactElement => {

    

    const IMAGE_LIST: [string, number][] = [
        [P1000709, 470],
        [P1000718, 280],
        [P1000723, 330],
        [P1000736, 360],
        [P1000884, 310],
        [P1000746, 330],
        [P1000803, 400],
        [P1000807, 610],
        [P1000821, 300],
        [P1000833, 550],
        [P1000849, 470],
        [P1000710, 470],
        [P1000921, 250], 
        [P1000738, 400],
        [P1000858, 400],
        [P1000838, 370], 
        [P1000886, 600],
    ];
    
    return <Standalone backToTopButton>
        <div style={{width: '1600px'}}>
            {IMAGE_LIST.reverse().map((src, i) => {
                return (
                    <a href={src[0]}><img src={src[0]} alt='Digicam photo' style={{margin: '5px', height: `${src[1]}px`, imageRendering: 'pixelated'}}></img></a>
                );
            })}
        </div>
    </Standalone>;
}

export default Digicam;
