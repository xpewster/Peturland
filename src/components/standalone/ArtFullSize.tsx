import Standalone from "./Standalone"
import aki_bokeh from '../../assets/portfolio/art/aki_bokeh.png';
import bananafish from '../../assets/portfolio/art/bananafish.png';
import nuke from '../../assets/portfolio/art/nuke.png';
import { useParams } from "react-router";

export const ArtFullSize = (): React.ReactElement => {

    const art: string[] = [aki_bokeh, bananafish, nuke]

    const params = useParams();
    const indexParam = params.index;
    let index = 0;
    if (indexParam) {
        index = parseInt(indexParam, 10);
    }

    return <Standalone>
        <div style={{paddingLeft: '5px', paddingRight: '5px',}}>
            <img key={index} src={art[index]} alt={`Art ${index}`} style={{margin: '4px'}} />
        </div>
    </Standalone>;
}

export default ArtFullSize;
