import styled from 'styled-components';

export const DaySelectorContainer = styled.div`
    background-color: ${props => props.filled ? "#dbdbdb" : "#fff"};
    color: ${props => props.filled ? "#fff" : "#dbdbdb"};
    border-radius: 5px;
    border: 2px solid #dbdbdb;
    width: 30px;
    height: 30px;
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-right: 5px;
`