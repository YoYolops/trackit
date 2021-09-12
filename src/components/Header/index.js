import React from 'react';
import { HeaderContainer } from './style.js';

function Header({profilePic}) {

    return (
        <HeaderContainer>
            <p>TrackIt</p>
            <img src={profilePic} alt="profile" />
        </HeaderContainer>
    )
}



export default Header;