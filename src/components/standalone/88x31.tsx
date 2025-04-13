import Standalone from "./Standalone"
import underconstruction from '../../assets/88x31/construction.gif';
import source from '../../assets/88x31/source.png';
import catagolue from '../../assets/88x31/catagolue.png';
import cs from '../../assets/88x31/cs.gif';
import hostyellow from '../../assets/88x31/hostyellow.gif';
import npp from '../../assets/88x31/notepadpp3.gif';
import kona from '../../assets/88x31/kona88.png';
import yoshi from '../../assets/88x31/yoshihatchbutton.gif';
import tt from '../../assets/88x31/tt.png';
import oriland from '../../assets/88x31/oribana.gif';
import lain from '../../assets/88x31/lain.gif';
import shiina from '../../assets/88x31/shiina.png';
import wtf from '../../assets/88x31/1971.gif';
import sayNo from '../../assets/88x31/roly-saynotoweb3.gif';
import ostans from '../../assets/88x31/ostans.gif';
import winxp from '../../assets/88x31/winxp.gif';
import peturland from '../../assets/88x31/peturland.png';
import peturland_outline from '../../assets/88x31/peturland_outline.png';
import cool from '../../assets/fileboxicons/cool.gif';
import seafare from '../../assets/88x31/seafare.png';
import retrobar from '../../assets/88x31/retrobar.png'; 

// make: peturland, retrobar 88x31s

export const EightyEight = (): React.ReactElement => {

	const list: [string, string | null][] = [
		[source, "https://en.wikipedia.org/wiki/Source_(game_engine)"],
		[hostyellow, null],
		[npp, "https://notepad-plus-plus.org/"],
		[tt, "https://www.toontownrewritten.com/"],
		[oriland, "https://www.oriland.com/gallery/animals/main.php?index.php"],
		[shiina, "https://animemusicquiz.com/"],
		[lain, "https://myanimelist.net/anime/339/Serial_Experiments_Lain?q=lain&cat=anime"],
		[wtf, "https://wtfhappenedin1971.com/"],
		[cs, "https://en.wikipedia.org/wiki/Counter-Strike:_Global_Offensive"],
		[yoshi, null],
		[kona, "https://konachan.com/"],
		[ostans, "https://www.ostan-collections.net/wiki/index.php/List_of_OS-tans"],
		[sayNo, "https://yesterweb.org/no-to-web3/"],
		[winxp, "https://en.wikipedia.org/wiki/Windows_XP"],
		[catagolue, "https://catagolue.hatsya.com/home"],
		[seafare, "https://seafare.neocities.org/"],
		[retrobar, "https://github.com/dremin/RetroBar"],
	]

	return <Standalone>
		<div style={{paddingLeft: '10px', paddingRight: '10px'}}>
			<img src={underconstruction} style={{display: 'block', paddingBottom: '10px'}}/>
			<hr className="standalonehr"/>
			<div style={{paddingBottom: '20px'}}>
				<p>Link back here! Big thanks <img src={cool} style={{verticalAlign: 'middle'}}></img></p>
				<a href="https://peturland.com/home" target="_blank" rel="noopener noreferrer"><img src={peturland} style={{margin: '5px'}}/></a>
				<a href="https://peturland.com/home" target="_blank" rel="noopener noreferrer"><img src={peturland_outline} style={{margin: '5px'}}/></a>
			</div>
			<hr className="standalonehr"/>
			{
				list.map((src, i) => {
					return src[1] ? <a href={src[1]} target="_blank" rel="noopener noreferrer">
						<img className="rbarbox" src={src[0]} />
						</a> : <img className="rbarbox" src={src[0]} />;
				})
			}
		</div>
	</Standalone>;
}

export default EightyEight;
