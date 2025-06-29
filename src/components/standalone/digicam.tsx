import Standalone from "./Standalone";
import DatedComponentList, { DatedComponent } from "../common/DatedComponentList";

/* 2024 */
import P1000709 from '../../assets/standalone/digicam/2024/P1000709.jpg';
import P1000710 from '../../assets/standalone/digicam/2024/P1000710.jpg';
import P1000718 from '../../assets/standalone/digicam/2024/P1000718.jpg';
import P1000723 from '../../assets/standalone/digicam/2024/P1000723.jpg';
import P1000736 from '../../assets/standalone/digicam/2024/P1000736.jpg';
import P1000738 from '../../assets/standalone/digicam/2024/P1000738.jpg';
import P1000746 from '../../assets/standalone/digicam/2024/P1000746.jpg';
import P1000803 from '../../assets/standalone/digicam/2024/P1000803.jpg';
import P1000807 from '../../assets/standalone/digicam/2024/P1000807.jpg';
import P1000821 from '../../assets/standalone/digicam/2024/P1000821.jpg';
import P1000833 from '../../assets/standalone/digicam/2024/P1000833.jpg';
import P1000838 from '../../assets/standalone/digicam/2024/P1000838.jpg';
import P1000849 from '../../assets/standalone/digicam/2024/P1000849.jpg';
import P1000858 from '../../assets/standalone/digicam/2024/P1000858.jpg';
import P1000884 from '../../assets/standalone/digicam/2024/P1000884.jpg';
import P1000886 from '../../assets/standalone/digicam/2024/P1000886.jpg';
import P1000921 from '../../assets/standalone/digicam/2024/P1000921.jpg';

/* 2025 */
import P1000969 from '../../assets/standalone/digicam/2025/P1000969.jpg';
import P1000971 from '../../assets/standalone/digicam/2025/P1000971.jpg';
import P1000988 from '../../assets/standalone/digicam/2025/P1000988.jpg';
import P1000991 from '../../assets/standalone/digicam/2025/P1000991.jpg';
import P1000998 from '../../assets/standalone/digicam/2025/P1000998.jpg';
import P1001002 from '../../assets/standalone/digicam/2025/P1010002.jpg';
import P1001004 from '../../assets/standalone/digicam/2025/P1010004.jpg';
import P1001005 from '../../assets/standalone/digicam/2025/P1010005.jpg';
import P1001024 from '../../assets/standalone/digicam/2025/P1010024.jpg';
import P1001040 from '../../assets/standalone/digicam/2025/P1010040.jpg';
import P1001068 from '../../assets/standalone/digicam/2025/P1010068.jpg';
import P1001086 from '../../assets/standalone/digicam/2025/P1010086.jpg';
import P1001126 from '../../assets/standalone/digicam/2025/P1010126.jpg';
import P1001134 from '../../assets/standalone/digicam/2025/P1010134.jpg';


// Rename JPG to jpg in bash: for f in *.JPG; do mv "$f" "${f%.JPG}.temp" && mv "${f%.JPG}.temp" "${f%.JPG}.jpg"; done

export const Digicam = (): React.ReactElement => {

    const IMAGE_LIST_2024: [string, number][] = [
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

    const IMAGE_LIST_2025: [string, number][] = [
        [P1001134, 400],
        [P1000998, 750],
        [P1001068, 400],
        [P1001126, 500],
        [P1000969, 350],
        [P1001002, 330],
        [P1000988, 300],
        [P1001004, 400],
        [P1001005, 400],
        [P1001086, 250],
        [P1001024, 530],
        [P1001040, 410],
        [P1000991, 600],
    ];

    const IMAGE_LIST: [string, [string, number][]][] = [
        ['2024', IMAGE_LIST_2024],
        ['2025', IMAGE_LIST_2025],
    ];

    const dateMapDescriptionPairs: DatedComponent[] = IMAGE_LIST.map(([year, images]) => {
        return [year,
            <div style={{width: '1600px'}}>
                {images.slice().reverse().map((src, i) => {
                    return (
                    <a href={src[0]}><img src={src[0]} alt='Digicam photo' style={{margin: '5px', height: `${src[1]}px`, imageRendering: 'pixelated'}}></img></a>
                );
            })}
            </div>];
    });

    return <Standalone backToTopButton>
        <DatedComponentList datedComponents={dateMapDescriptionPairs.reverse()}
            centered={true}
            dateTextStyle={{ fontSize: '20px', fontFamily: 'DOS, basiic, sans-serif', fontWeight: 'normal', textAlign: 'center' }}
        />
    </Standalone>;

    
    // return <Standalone backToTopButton>
    //     <div style={{width: '1600px'}}>
    //         {IMAGE_LIST.reverse().map((src, i) => {
    //             return (
    //                 <a href={src[0]}><img src={src[0]} alt='Digicam photo' style={{margin: '5px', height: `${src[1]}px`, imageRendering: 'pixelated'}}></img></a>
    //             );
    //         })}
    //     </div>
    // </Standalone>;
}

export default Digicam;
