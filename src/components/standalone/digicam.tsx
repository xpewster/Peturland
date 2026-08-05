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

/* 2026 */
import P1010203 from '../../assets/standalone/digicam/2026/P1010203.jpg';
import P1010264 from '../../assets/standalone/digicam/2026/P1010264.jpg';
import P1010308 from '../../assets/standalone/digicam/2026/P1010308.jpg';
import P1010421 from '../../assets/standalone/digicam/2026/P1010421.jpg';
import P1010561 from '../../assets/standalone/digicam/2026/P1010561.jpg';
import P1010634 from '../../assets/standalone/digicam/2026/P1010634.jpg';
import P1010691 from '../../assets/standalone/digicam/2026/P1010691.jpg';
import P1010222 from '../../assets/standalone/digicam/2026/P1010222.jpg';
import P1010270 from '../../assets/standalone/digicam/2026/P1010270.jpg';
import P1010326 from '../../assets/standalone/digicam/2026/P1010326.jpg';
import P1010442 from '../../assets/standalone/digicam/2026/P1010442.jpg';
import P1010570 from '../../assets/standalone/digicam/2026/P1010570.jpg';
import P1010647 from '../../assets/standalone/digicam/2026/P1010647.jpg';
import P1010705 from '../../assets/standalone/digicam/2026/P1010705.jpg';
import P1010231 from '../../assets/standalone/digicam/2026/P1010231.jpg';
import P1010282 from '../../assets/standalone/digicam/2026/P1010282.jpg';
import P1010353 from '../../assets/standalone/digicam/2026/P1010353.jpg';
import P1010475 from '../../assets/standalone/digicam/2026/P1010475.jpg';
import P1010582 from '../../assets/standalone/digicam/2026/P1010582.jpg';
import P1010652 from '../../assets/standalone/digicam/2026/P1010652.jpg';
import P1010713 from '../../assets/standalone/digicam/2026/P1010713.jpg';
import P1010253 from '../../assets/standalone/digicam/2026/P1010253.jpg';
import P1010284 from '../../assets/standalone/digicam/2026/P1010284.jpg';
import P1010356 from '../../assets/standalone/digicam/2026/P1010356.jpg';
import P1010500 from '../../assets/standalone/digicam/2026/P1010500.jpg';
import P1010602 from '../../assets/standalone/digicam/2026/P1010602.jpg';
import P1010664 from '../../assets/standalone/digicam/2026/P1010664.jpg';
import P1010256 from '../../assets/standalone/digicam/2026/P1010256.jpg';
import P1010287 from '../../assets/standalone/digicam/2026/P1010287.jpg';
import P1010388 from '../../assets/standalone/digicam/2026/P1010388.jpg';
import P1010514 from '../../assets/standalone/digicam/2026/P1010514.jpg';
import P1010627 from '../../assets/standalone/digicam/2026/P1010627.jpg';
import P1010686 from '../../assets/standalone/digicam/2026/P1010686.jpg';
import CommentedImage from "../common/CommentedImage";


// Rename JPG to jpg in bash: for f in *.JPG; do mv "$f" "${f%.JPG}.temp" && mv "${f%.JPG}.temp" "${f%.JPG}.jpg"; done
// Regex replace ls output to get import statements: P(\d+)\.jpg(  )* -> import P$1 from '../../assets/standalone/digicam/2026/P$1.jpg';\n';

export const Digicam = (): React.ReactElement => {

    type ImageList = [string, number, string?, string?][];
    const PINNED_IMAGES: ImageList = [
        [P1010287, 475],
        [P1010353, 475],
        [P1010284, 315],
        [P1010570, 315, 'camera glitch woooah'],
        [P1010203, 315],
        [P1000838, 450, 'Mass of the fermenting dregs in seattle 2024', '#9c03bb'],
        [P1000886, 500],
    ];

    const IMAGE_LIST_2024: ImageList = [
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
        [P1000838, 370, 'Mass of the fermenting dregs in seattle 2024', '#9c03bb'], 
        [P1000886, 600],
    ];

    const IMAGE_LIST_2025: ImageList = [
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

    const IMAGE_LIST_COTM: ImageList = [
        [P1010582, 400],
        [P1010602, 400],
        [P1010627, 400],
        [P1010634, 400],
        [P1010647, 400],
        [P1010652, 400],
        [P1010664, 400, 'Polyphemus\' cave'],
    ];

    const IMAGE_LIST_2026: ImageList = [
        [P1010203, 400],
        [P1010222, 400],
        [P1010231, 400],
        [P1010253, 400],
        [P1010256, 400],
        [P1010264, 400],
        [P1010270, 400],
        [P1010282, 400, 'Yoshi!!!'],
        [P1010284, 400],
        [P1010287, 400],
        [P1010308, 400],
        [P1010326, 400],
        [P1010353, 400],
        [P1010356, 400],
        [P1010388, 400],
        [P1010421, 400],
        [P1010442, 400],
        [P1010475, 400],
        [P1010500, 400],
        [P1010514, 400],
        [P1010561, 400, 'Quaking Aspen is awesome'],
        [P1010570, 400, 'camera glitch woooah'],
        [P1010686, 400, 'My telescope on Steens Mountain'],
        [P1010691, 400],
        [P1010705, 400, 'Cute antique store in Prineville, OR'],
        [P1010713, 400],
    ];

    const IMAGE_LIST: [string, ImageList, string?][] = [
        ['2024', IMAGE_LIST_2024],
        ['2025', IMAGE_LIST_2025],
        ['Craters of the Moon', IMAGE_LIST_COTM, 'part of my 2026 roadtrip.'],
        ['2026', IMAGE_LIST_2026],
        ['Favorites', PINNED_IMAGES],
    ];

    const dateMapDescriptionPairs: DatedComponent[] = IMAGE_LIST.map(([year, images, description]) => {
        return [year,
            <div style={{width: '1600px'}}>
                {images.slice().reverse().map((src, i) => {
                    return (
                    <a href={src[0]}><CommentedImage src={src[0]} alt='Digicam photo' style={{margin: '5px', height: `${src[1]}px`, imageRendering: 'pixelated'}} comment={src[2]} commentColor={src[3]} hover></CommentedImage></a>
                );
            })}
            </div>,
            description];
    });

    return <Standalone backToTopButton>
        <DatedComponentList datedComponents={dateMapDescriptionPairs.reverse()}
            centered={true}
            dateTextStyle={{ fontSize: '20px', fontFamily: 'DOS, basiic, sans-serif', fontWeight: 'normal', textAlign: 'center' }}
            navigation={true}
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
