import Standalone from "./Standalone"
import underconstruction from '../../assets/88x31/construction.gif';
import DatedComponentList, { DatedComponent } from "../common/DatedComponentList";

export const PatchNotes = (): React.ReactElement => {

    const dateNotesPairs: DatedComponent[] = [
        ['03-19-2025', <></>, "First check in!"],
        ['03-20-2025', <></>, "I added new xgeo games for N.A. State highway signs and NA/BR abbreviations! \nPlus some cool new things, check out yoshi on the home page~! But don't click on him pl0x \nAlso, the xgeo games can now track multiple PPs or PI's!"],
        ['03-22-2025', <></>, "Finally composed the about page.."],
    ];

    return <Standalone>
        <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
            <img src={underconstruction} alt="Under Construction" style={{width: '88px', height: '31px'}}/>
            <DatedComponentList datedComponents={dateNotesPairs.reverse()}/>
        </div>
    </Standalone>;
}

export default PatchNotes;
