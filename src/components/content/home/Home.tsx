import React from 'react';
import fish from '../../../assets/fish1.gif';
import bar from '../../../assets/bar.png';
import barflip from '../../../assets/barflip.png';
import filebox from '../../../assets/filebox.png';
import { Link } from 'react-router';
import dots from '../../../assets/dots.png';
import home from '../../../assets/home.png';

const Home = (): React.ReactElement => {
    return (
        <div style={{position: 'relative'}}>
            {/* <div style={{height: '20px'}}>
                <div style={{paddingTop: '2px'}}>
                    <div style={{left: '20px'}} className='fileboxlink'><p className='fileboxlink'>Home</p></div>
                </div>
                <img className='filebox' src={filebox}></img>
            </div> */}
            <img src={home}></img>
            <div style={{position: 'absolute', padding: '0', top: '30px', left: '10px', width: '316px', height: '329px'}}>
                {/* <img style={{position: 'absolute', left: '-2px', top: '70px'}} src={dots}></img> */}
                <p style={{paddingTop: '2px', paddingLeft: '14px', marginTop: 0}}><span style={{textDecoration: 'underline'}}>H</span>ome</p>
                <p style={{paddingTop: '20px', paddingLeft: '10px'}}>{'the webmaster\'s little home on the internet 8}'}</p>
                {/* <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src={fish}></img> */}
                {/* <img style={{display: 'block', position: 'absolute', top: '120px', left: '-100px', clipPath: 'rect(0px 100% 100% 102px)'}} src={bar}></img>
                <p className='bartext' style={{position: 'absolute', top: '110px', left: '40px'}}>what youll find</p>
                {/* <img style={{display: 'block', position: 'absolute', top: '300px', right: '-140px', clipPath: 'rect(0px 272px 100% 0px)'}} src={barflip}></img>
                <p className='bartext' style={{position: 'absolute', top: '290px', right: '40px'}}>what you <span style={{textDecoration: 'underline'}}>WONT</span> find</p> */}
                {/* <img style={{display: 'block', position: 'absolute', top: '450px', left: '-100px', clipPath: 'rect(0px 100% 100% 102px)'}} src={bar}></img>
                <p className='bartext' style={{position: 'absolute', top: '440px', left: '90px'}}>what you <span style={{textDecoration: 'underline'}}>WONT</span> find</p> } */}
            </div>
        </div>
    );
};

export default Home;
