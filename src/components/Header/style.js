import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: var(--darkBlue);
    height: 70px;
    width: 100%;
    font-family: 'Playball', cursive;;
    color: #fff;
    font-size: 36px;
    position: fixed;
    top: 0;

    img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }
`