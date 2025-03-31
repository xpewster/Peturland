import Standalone from "./Standalone"
import underconstruction from '../../assets/88x31/construction.gif';

export const UnderConstructionStandalone = (): React.ReactElement => {

    return <Standalone>
        <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
            <img src={underconstruction} alt='Under Construction' />
        </div>
    </Standalone>;
}

export default UnderConstructionStandalone;
