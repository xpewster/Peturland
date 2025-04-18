import silica from '../../../assets/silica.jpg';
import underconstruction from '../../../assets/88x31/construction.gif';
import trees from '../../../assets/gifs/pinetree.gif';

const XgeoSoon = () => {
    return (
        <div style={{padding: '10px'}}>
            
            <img style={{margin: 'auto'}} src={underconstruction} alt="Under Construction" className="xgeo-soon-construction" />
            <p style={{margin: 'auto'}}>Coming soon!</p>
            <img style={{position: 'absolute', right: '20px', top:'60px', margin: 'auto', width: '150px', height: '150px', imageRendering: 'pixelated'}} src={silica} alt="Silica" />
            <img style={{position: 'absolute', left: '-120px', top:'90px', margin: 'auto', width: '700px', height: 'auto', imageRendering: 'pixelated', zIndex: -5}} src={trees} alt="Trees" />
        </div>
    );
};

export default XgeoSoon;
