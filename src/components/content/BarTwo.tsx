import React from 'react';
import cloudynights from '../../assets/cloudynights.png';
import kona from '../../assets/kona.png';
import gifs from '../../assets/99gif.gif';
import gifstwo from '../../assets/gifcities.png';
import century from '../../assets/century.jpg';
import silica from '../../assets/silica.jpg';
import telescope from '../../assets/telescope.gif';

const BarTwo = (): React.ReactElement => {
    return (
        <div style={{float: 'left', paddingLeft: '20px', paddingBottom: '5px'}}>
            {/* <a href='https://www.cloudynights.com/' target="_blank" rel="noopener noreferrer"><img className='barboxtwo' style={{height: '120px'}} src={cloudynights}/></a> */}
            {/* <a href='https://gifcities.org/' target="_blank" rel="noopener noreferrer"><img className='barboxtwo' style={{height: '100px'}} src={gifstwo}/></a> include link in bottom?*/}
            {/* <a href='https://konachan.com/' target="_blank" rel="noopener noreferrer"><img className='barboxtwo' style={{height: '120px'}} src={kona}/></a> */}
            <a href='https://99gifshop.neocities.org/' target="_blank" rel="noopener noreferrer"><img className='barboxtwo' src={gifs}/></a>
            <a href='https://www.reddit.com/r/centuryhomes/' target="_blank" rel="noopener noreferrer"><img className='barboxtwo' style={{height: '100px', paddingLeft: '0px'}} src={century}/></a>
            <img className='barboxtwo' style={{height: '100px'}} src={silica}/>
            {/* <p style={{position: 'absolute', right: '92px', bottom: '50px'}}>Don't eat! Or click!</p> */}
            <img style={{position: 'absolute', right: '30px', bottom: '50px', height: '145px'}} src={telescope}/>
        </div>
    );
};

export default BarTwo;
