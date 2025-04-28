import Standalone from "./Standalone"
import underconstruction from '../../assets/88x31/construction.gif';
import DatedComponentList, { DatedComponent } from "../common/DatedComponentList";

export const PatchNotes = (): React.ReactElement => {

    const dateNotesPairs: DatedComponent[] = [
        ['03-19-2025', <></>, "First check in!"],
        ['03-20-2025', <></>, "I added new xgeo games for N.A. State highway signs and NA/BR abbreviations! \nPlus some cool new things, check out yoshi on the home page~! But don't click on him pl0x \nAlso, the xgeo games can now track multiple PPs or PI's!"],
        ['03-22-2025', <></>, "Finally composed the about page!"],
        ['03-23-2025', <></>, "I added an xgeo game for Brazil Postcodes. Super annoying to make as I had to trace the json myself.."],
        ['03-26-2025', <></>, "Tracked down that rascally memory leak! Also added the Portfolio page"],
        ['03-29-2025', <></>, "Attention fellow webmasters--I've created a new WhatsInTheSky widget you can use, check out the home page~"],
        ['04-01-2025', <></>, "I added over 100 new objects to the in the sky widget! Not an april fools joke I promise!! (how would that be a joke anyways..)"], 
        ['04-02-2025', <></>, "Two new xgeo games! Obsessed with these XP icons... the games are Indo kabupatens and EU chevrons! We getting real nerdy now... :cool:"],
        ['04-07-2025', <></>, "Happy April 7th!! Hells yes!!! Bunch of new geo games. Also experimenting with a low-res option for the license plates game."],
        ['04-11-2025', <></>, "Just finished the most neglected-tropical-disease-inducing quiz yet.. NANP aka NA area codes! It was super annoying to map out, hope you enjoy!"],
        ['04-12-2025', <></>, "Added some final touches. Might pause the updates for a bit..real jobs am i right?"],
    ];

    return <Standalone>
        <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
            <img src={underconstruction} alt="Under Construction" style={{width: '88px', height: '31px'}}/> <u>Patch Notes</u>
            <DatedComponentList datedComponents={dateNotesPairs.reverse()}/>
        </div>
    </Standalone>;
}

export default PatchNotes;
