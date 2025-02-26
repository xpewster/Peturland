import React from 'react';
import chao from '../../assets/chao.jpg';
import smlnew from '../../assets/smlnew.gif';

const Counter = (): React.ReactElement => {
    return (
        <div style={{position: 'relative'}}>
            <img style={{position: 'relative', width: '100%', paddingLeft: '0', paddingTop: '10px'}} src={chao}/>

            <div style={{position: 'absolute', width:'100%', bottom: '0px'}}>
                <p className='p-old' style={{whiteSpace: 'nowrap', marginBottom: '0px', textAlign: 'center'}}>You are visitor number </p>
                <a style={{paddingTop: '0px', marginLeft: '10px', display: 'block'}} href='https://www.counter12.com'><img src='https://www.counter12.com/img-W2aCyz59D8xD6DaW-72.gif' style={{border: '0'}} alt='free counter'/></a><script type='text/javascript' src='https://www.counter12.com/ad.js?id=W2aCyz59D8xD6DaW'></script>
            </div>
        </div>
    );
};

export default Counter;
