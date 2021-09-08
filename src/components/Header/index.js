import React from 'react';
import { HeaderContainer } from './style.js';

function Header({profilePic}) {

    return (
        <HeaderContainer>
            <p>TackIt</p>
            <img src={profilePic}/>
        </HeaderContainer>
    )
}



export default Header;