import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    height: 110px;
    width: 100%;
    .progressButton {
        font-family: 'Lexend Deca', sans-serif;
        width: 90px;
        height: 90px;
        position: absolute;
        bottom: 10px;
        left: calc(50% - 45px);
    }
`

export const CentralButtonContainer = styled.div`
    border: 2px solid blue;
`

export const BottomBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    width: 100%;
    height: 70px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    font-family: 'Lexend Deca', sans-serif;

    a {
        color: var(--lightBlue);
        font-size: 16px;
        border: none;
        text-decoration: none;
    }
`