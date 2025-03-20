import Standalone from "./Standalone"
import underconstruction from '../../assets/88x31/construction.gif';

export const PatchNotes = (): React.ReactElement => {

    return <Standalone>
        <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
            <img src={underconstruction} />
        </div>
    </Standalone>;
}

export default PatchNotes;
