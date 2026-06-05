import thumbsUp from '../../../../assets/consistency/consistent.gif'
import smile from '../../../../assets/emoji/smile.gif';
import cool from '../../../../assets/emoji/cool.gif';
import idea from '../../../../assets/emoji/idea.gif';
import sad from '../../../../assets/emoji/weak.gif';
import bigSmile from '../../../../assets/emoji/very.png';
import mad from '../../../../assets/emoji/mad.gif';
import shiWave from '../../../../assets/emoji/shiWave.png';
import shiBlob from '../../../../assets/emoji/shiBlob.png';
import akkoDown from '../../../../assets/emoji/akkoDown.png';
import litter from '../../../../assets/emoji/litter.png';
import despair from '../../../../assets/emoji/despairRe.gif';

export const EMOJI_SRC: Record<string, string> = {
    ":thumbsUp:": thumbsUp,
    ":smile:": smile,
    ":cool:": cool,
    ":idea:": idea,
    ":sad:": sad,
    ":bigSmile:": bigSmile,
    ":mad:": mad,
    ":shiWave:": shiWave,
    ":shiBlob:": shiBlob,
    ":akkoDown:": akkoDown,
    ":put_litter_in_its_place:": litter,
    ":despair:": despair,
};

export const EMOJI_CODES = Object.keys(EMOJI_SRC);