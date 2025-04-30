import { Link } from "react-router";
import "./Sitemap.css";
import { Path } from "../../constants/Path";

const Sitemap = () => {
  return (
    <div>
      <div className="tree">
        <ul>
          <li><Link to={Path.HOME}>Home</Link></li>
          <li><Link to={Path.ABOUT}>About Me</Link></li>
          <li><Link to={Path.PROJECTS}>Portfolio</Link></li>
          <li><Link to={Path.TRAVEL_LOG}>Travel Log</Link></li>
          <li><Link to={Path.GET_IN_THE_SKY}>Get In The Sky</Link></li>
          <li><Link to={Path.EIGHTYEIGHT}>88x31</Link></li>
          <li><Link to={Path.CREDITS}>Credits</Link></li>
          <li><Link to={Path.ANNOUNCEMENTS}>Patch Notes</Link></li>
          <li><Link to={Path.DIGICAM}>Digicam</Link></li>
          <li><Link to={Path.VISITORS}>Visitors</Link></li>
          <li><Link to={Path.SUPPORT}>Support</Link></li>
          <li>
            <Link to={Path.XGEO}>xgeo</Link>
            <ul>
              <li>
                North America
                <ul>
                  <li><Link to={Path.XGEO_US}>License Plates</Link></li>
                  <li><Link to={Path.XGEO_US_ADOPT_A_HIGHWAY}>Adopt A Highway</Link></li>
                  <li><Link to={Path.XGEO_US_STATE_HIGHWAY}>State Highway</Link></li>
                  <li><Link to={Path.XGEO_US_COUNTY_SECONDARY_HIGHWAY}>County Secondary Highway</Link></li>
                  <li><Link to={Path.XGEO_US_STATE_FLAGS}>State Flags</Link></li>
                  <li><Link to={Path.XGEO_US_WINDSHIELD_STICKERS}>Windshield Stickers</Link></li>
                  <li><Link to={Path.XGEO_NA_ABBREVIATIONS}>Abbreviations</Link></li>
                  <li><Link to={Path.XGEO_NA_AREA_CODES}>Area Codes</Link></li>
                  <li><Link to={Path.XGEO_NA_TREE_SPECIES}>Tree Species</Link></li>
                </ul>
              </li>
              <li>
                Brazil
                <ul>
                  <li><Link to={Path.XGEO_BR}>Phone Codes</Link></li>
                  <li><Link to={Path.XGEO_BR_ABBREVIATIONS}>Abbreviations</Link></li>
                  <li><Link to={Path.XGEO_BR_POSTCODES}>Postcodes</Link></li>
                </ul>
              </li>
              <li>
                Europe
                <ul>
                  <li><Link to={Path.XGEO_EU_BOLLARDS}>Bollards</Link></li>
                  <li><Link to={Path.XGEO_EU_CHEVRONS}>Chevrons</Link></li>
                  <li><Link to={Path.XGEO_EU_DOMAINS}>Domains</Link></li>
                  <li><Link to={Path.XGEO_EU_GUARDRAILS}>Guardrails</Link></li>
                  <li><Link to={Path.XGEO_EU_FLAGS}>Flags</Link></li>
                  <li><Link to={Path.XGEO_EU_PEDESTRIAN_CROSSINGS}>Pedestrian Crossings</Link></li>
                </ul>
              </li>
              <li>
                Japan
                <ul>
                  <li><Link to={Path.XGEO_JP_AREACODES}>Area Codes</Link></li>
                  <li><Link to={Path.XGEO_JP_PREFECTURES}>Prefectures</Link></li>
                  <li><Link to={Path.XGEO_JP_POLE_PLATES}>Pole Plates</Link></li>
                  <li><Link to={Path.XGEO_JP_POLE_REFLECTORS}>Pole Reflectors</Link></li>
                  <li><Link to={Path.XGEO_JP_POLE_ATTACHMENTS}>Pole Attachments</Link></li>
                  <li><Link to={Path.XGEO_JP_KANJI}>Kanji</Link></li>
                  <li><Link to={Path.XGEO_JP_REGIONS}>Regions</Link></li>
                </ul>
              </li>
              <li>
                Other countries
                <ul>
                  <li><Link to={Path.XGEO_MONG}>Mongolia Driving Direction</Link></li>
                  <li><Link to={Path.XGEO_INDONESIA_KABUPATEN}>Indonesia Kabupaten</Link></li>
                  <li><Link to={Path.XGEO_PHILLIPINES_PROVINCES}>Philippines Provinces</Link></li>
                  <li><Link to={Path.XGEO_PHILLIPINES_REGIONS}>Philippines Regions</Link></li>
                  <li><Link to={Path.XGEO_NIGERIA_STATES}>Nigeria States</Link></li>
                  <li><Link to={Path.XGEO_KENYA_COUNTIES}>Kenya Counties</Link></li>
                  <li><Link to={Path.XGEO_AUSTRALIA_PLATES}>Australia Plates</Link></li>
                  <li><Link to={Path.XGEO_ZA_PLATES}>South Africa Plates</Link></li>
                  <li><Link to={Path.XGEO_ZA_PROVINCES}>South Africa Provinces</Link></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        </div>
        
        <hr />
        <p style={{paddingLeft: '10px'}}>© Peturland.com - Last Updated: April 27 2025</p>
    </div>
    );
};

export default Sitemap;
