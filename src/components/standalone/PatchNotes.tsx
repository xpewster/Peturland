import Standalone from "./Standalone"
import underconstruction from '../../assets/88x31/construction.gif';
import DatedComponentList, { DatedComponent } from "../common/DatedComponentList";

export const PatchNotes = (): React.ReactElement => {

    const dateNotesPairs: DatedComponent[] = [
        ['03-19-2025', <></>, "First check in!"],
        ['03-20-2025', <></>, "Added N.A. State highway games and abbreviation games! \nPlus some cool new things, check out yoshi on the home page~! Don't click on him pl0x \nAlso, the xgeo games can track multiple PPs or PI's!"],
    ];

    return <Standalone>
        <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
            <img src={underconstruction} alt="Under Construction" style={{width: '88px', height: '31px'}}/>
            <DatedComponentList datedComponents={dateNotesPairs.reverse()}/>
        </div>
    </Standalone>;
}

export default PatchNotes;
