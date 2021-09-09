import React from 'react';

import LoadingScreen from './style';
import { ImSpinner9 } from 'react-icons/im';

function Loading() {
    return (
        <LoadingScreen>
            <ImSpinner9 className="spinner" size="80px" color="#52b6ff"/>
        </LoadingScreen>
    )
}

export default Loading;