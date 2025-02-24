import React from 'react';
import cloudynights from '../../assets/cloudynights.png';
import kona from '../../assets/kona.png';
import gifs from '../../assets/99gif.gif';
import gifstwo from '../../assets/gifcities.png';
import century from '../../assets/century.jpg';

const BarTwo = (): React.ReactElement => {
    return (
        <div style={{float: 'left', paddingLeft: '20px', paddingBottom: '5px'}}>
            <a href='https://www.cloudynights.com/' target="_blank" rel="noopener noreferrer"><img className='barboxtwo' style={{height: '85px'}} src={cloudynights}/></a>
            <a href='https://gifcities.org/' target="_blank" rel="noopener noreferrer"><img className='barboxtwo' style={{height: '85px'}} src={gifstwo}/></a>
            <a href='https://99gifshop.neocities.org/' target="_blank" rel="noopener noreferrer"><img className='barboxtwo' src={gifs}/></a>
            <a href='https://konachan.com/' target="_blank" rel="noopener noreferrer"><img className='barboxtwo' src={kona}/></a>
            <a href='https://www.reddit.com/r/centuryhomes/' target="_blank" rel="noopener noreferrer"><img className='barboxtwo' style={{height: '145px', paddingLeft: '0px'}} src={century}/></a>
        </div>
    );
};

export default BarTwo;
