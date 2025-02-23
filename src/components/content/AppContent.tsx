import React from 'react';
import { ContentType } from '../../constants/ContentType';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import Xgeo from './xgeo/Xgeo';
import Soon from './soon/Soon';

export interface AppContentProps {
    contentType: ContentType;
}

const AppContent = ({
    contentType,
}: AppContentProps): React.ReactElement => {

    const getContent = (): React.ReactElement => {
        switch(contentType) {
            case ContentType.ABOUT:
                return <About />;
            case ContentType.PROJECTS:
                return <Soon />;
            case ContentType.XGEO:
                return <Xgeo />;
            case ContentType.SOON:
                return <Soon />;    
            default: 
            case ContentType.HOME:
                return <Home />;
        }
    };

    return getContent();
};

export default AppContent;
