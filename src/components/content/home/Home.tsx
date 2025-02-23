import React from 'react';
import fish from '../../../assets/fish1.gif';

const Home = (): React.ReactElement => {
    return (
        <div>
            <p>This is home...</p>
            <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src={fish}></img>
        </div>
    );
};

export default Home;
