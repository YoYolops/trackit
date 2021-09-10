import styled from 'styled-components';

export const Button = styled.button`
    width: ${ props => props.width ? props.width : "303px" };
    height: ${ props => props.height ? props.height : "45px"};
    background-color: ${ props => props.filled ? "var(--lightBlue)" : "#fff" };
    color: ${ props => props.filled ? "#fff" : "var(--lightBlue)" };
    opacity: ${ props => props.isLoading ? "0.8" : "1" };
    border-radius: 5px;

    .loadingIco {
        display: ${ props => props.isLoading ? "unset" : "none" };
    }
`

export const SectionTitle = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 22px;
    color: var(--darkBlue);
`
