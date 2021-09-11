import React from 'react';
import { HeaderContainer } from './style.js';

function Header({profilePic}) {

    return (
        <HeaderContainer>
            <p>TrackIt</p>
            <img src={profilePic}/>
        </HeaderContainer>
    )
}



export default Header;