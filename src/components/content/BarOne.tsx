import React from 'react';
import sayNo from '../../assets/roly-saynotoweb3.gif';
import lain from '../../assets/lain.gif';
import shiina from '../../assets/shiina.png';
import wtf from '../../assets/1971.gif';
import catagolue from '../../assets/catagolue.png';
import tt from '../../assets/tt.png';
import oriland from '../../assets/oribana.gif';
import smlnew from '../../assets/smlnew.gif';

const BarOne = (): React.ReactElement => {
    return (
        <div style={{float: 'left', paddingLeft: '20px', paddingBottom: '5px'}}>
            <a href='https://yesterweb.org/no-to-web3/' target="_blank" rel="noopener noreferrer"><img className='barbox' src={sayNo}/></a>
            <a href='https://myanimelist.net/profile/Pewster' target="_blank" rel="noopener noreferrer"><img className='barbox' src={lain}/></a>
            <a href='https://animemusicquiz.com/' target="_blank" rel="noopener noreferrer"><img className='barbox' src={shiina}/></a>
            <a href='https://wtfhappenedin1971.com/' target="_blank" rel="noopener noreferrer"><img className='barbox' src={wtf}/></a>
            {/* <a href='https://catagolue.hatsya.com/census/b3s23/C1/xq7' target="_blank" rel="noopener noreferrer"><img className='barbox' src={catagolue}/></a> */}
            <a href='https://www.toontownrewritten.com/' target="_blank" rel="noopener noreferrer"><img className='barbox' src={tt}/></a>
            <a href='https://www.oriland.com/gallery/animals/main.php?index.php' target="_blank" rel="noopener noreferrer"><img className='barbox' src={oriland}/></a>
            <img style={{position: 'absolute', width:'60px'}} src={smlnew}/>
        </div>
    );
};

export default BarOne;
