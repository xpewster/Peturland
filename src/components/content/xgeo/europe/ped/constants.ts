import ee from '../../../../../assets/ped/three/ee.png';
import lt from '../../../../../assets/ped/three/lt.png';
import ru from '../../../../../assets/ped/three/ru.png';
import ua from '../../../../../assets/ped/three/ua.png';

import bul from '../../../../../assets/ped/four/bul.png';
import is from '../../../../../assets/ped/four/is.png';
import it from '../../../../../assets/ped/four/it.png';
import no from '../../../../../assets/ped/four/no.png';
import swe from '../../../../../assets/ped/four/swe.png';
import swe1 from '../../../../../assets/ped/four/swe1.png';

import bosn from '../../../../../assets/ped/five/bosn.png';
import cz from '../../../../../assets/ped/five/cz.png';
import de from '../../../../../assets/ped/five/de.png';
import dk from '../../../../../assets/ped/five/dk.png';
import fi from '../../../../../assets/ped/five/fi.png';
import fr from '../../../../../assets/ped/five/fr.png';
import hung from '../../../../../assets/ped/five/hung.png';
import ie from '../../../../../assets/ped/five/ie.png';
import lux from '../../../../../assets/ped/five/lux.png';
import lv from '../../../../../assets/ped/five/lv.png';
import mol from '../../../../../assets/ped/five/mol.png';
import nl from '../../../../../assets/ped/five/nl.png';
import pt from '../../../../../assets/ped/five/pt.png';
import ro from '../../../../../assets/ped/five/ro.png'; // albania, monte too
import serb from '../../../../../assets/ped/five/serb.png';
import sk from '../../../../../assets/ped/five/sk.png';
import sv from '../../../../../assets/ped/five/sv.png';
import tr from '../../../../../assets/ped/five/tr.png';
import tr2 from '../../../../../assets/ped/five/tr2.png';
import fi2 from '../../../../../assets/ped/five/fi2.png';

import ch from '../../../../../assets/ped/seven/ch.png';

import sp from '../../../../../assets/ped/eight/sp.png';

import at from '../../../../../assets/ped/other/at.png';
import be from '../../../../../assets/ped/other/be.png';
import gr from '../../../../../assets/ped/other/gr.png';
import gr2 from '../../../../../assets/ped/other/gr2.png';
import pl from '../../../../../assets/ped/other/pl.png';
import cy from '../../../../../assets/ped/other/cy.png';

export const PEDESTRIAN_CROSSINGS = [
    ee,     // 0
    lt,     // 1
    ru,     // 2
    ua,     // 3
    bul,    // 4
    is,     // 5
    it,     // 6
    no,     // 7
    swe,    // 8
    swe1,   // 9
    bosn,   // 10
    cz,     // 11
    de,     // 12
    dk,     // 13
    fi,     // 14
    fr,     // 15
    hung,   // 16
    ie,     // 17
    lux,    // 18
    lv,     // 19
    mol,    // 20
    nl,     // 21
    pt,     // 22
    ro,     // 23
    serb,   // 24
    sk,     // 25
    sv,     // 26
    tr,     // 27
    tr2,    // 28
    ch,     // 29
    sp,     // 30
    at,     // 31
    be,     // 32
    gr,     // 33
    gr2,    // 34
    pl,     // 35
    cy,     // 36
    fi2,    // 37
];

export const STRIPE_NUMBERS = [
    0,3,4,5,7,8,
];

export const COUNTRY_INDEX_TO_CROSSING_INDEX = [
    [23],  // Albania
    [10],  // Bosnia and Herzegovina
    [4],   // Bulgaria
    [36],  // Cyprus
    [13],  // Denmark
    [17],  // Ireland
    [0],   // Estonia
    [31],  // Austria
    [11],  // Czech Republic
    [14],  // Finland
    [15],  // France
    [2],  // Georgia - no matching crossing found
    [12],  // Germany
    [33],  // Greece (using gr)
    [16],  // Croatia - no matching crossing found
    [16],  // Hungary
    [5],   // Iceland
    [6],   // Italy
    [19],  // Latvia
    [2],  // Belarus - no matching crossing found
    [1],   // Lithuania
    [25],  // Slovakia
    [29],  // Liechtenstein - no matching crossing found
    [23],  // North Macedonia - no matching crossing found
    [6],  // Malta - no matching crossing found
    [32],  // Belgium
    [],  // Faroe Islands - no matching crossing found
    [30],  // Andorra - no matching crossing found
    [18],  // Luxembourg
    [],  // Monaco - no matching crossing found
    [23],  // Montenegro - no matching crossing found
    [21],  // Netherlands
    [7],   // Norway
    [35],  // Poland
    [22],  // Portugal
    [23],  // Romania
    [20],  // Moldova
    [26],  // Slovenia (assuming sv is Slovenia)
    [30],  // Spain
    [8],   // Sweden (using swe)
    [29],  // Switzerland
    [27],  // Turkey (using tr)
    [],  // United Kingdom - no matching crossing found
    [3],   // Ukraine
    [6],  // San Marino - no matching crossing found
    [24],  // Serbia
    [],  // Holy See (Vatican City
    [2],   // Russia
];

export const CROSSING_INDEX_TO_REGION_INDICES = [
    [6], // ee
    [20, 47, 19, 43, 11], // lt
    [20, 47, 19, 43, 11], // ru
    [20, 47, 19, 43, 11], // ua
    [2], // bul
    [16], // is
    [17, 24, 44, 10], // it
    [32], // no
    [39], // swe
    [39], // swe1
    [1, 14], // bosn
    [8, 21], // cz
    [21, 12, 28], // de
    [4], // dk
    [9], // fi
    [17, 24, 44, 10], // fr
    [15], // hung
    [5], // ie
    [21, 12, 28], // lux
    [18], // lv
    [36], // mol
    [31], // nl
    [34], // pt
    [35, 0, 23, 30, 24, 37, 41, 45], // ro
    [35, 0, 23, 30, 24, 37, 41, 45], // serb
    [21, 12, 28], // sk
    [35, 0, 23, 30, 24, 37, 41, 45], // sv
    [35, 0, 23, 30, 24, 37, 41, 45], // tr
    [41], // tr2
    [40, 22], // ch
    [38, 27], // sp
    [7], // at
    [25], // be
    [13], // gr
    [13], // gr2
    [33], // pl
    [3], // cy
    [9], // fi2
]