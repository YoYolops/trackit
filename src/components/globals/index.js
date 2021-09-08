import styled from 'styled-components';

export const Button = styled.button`
    width: ${ props => props.width ? props.width : "303px" };
    height: ${ props => props.height ? props.height : props.width };
    background-color: ${ props.filled ? "var(--lightBlue)" : "#fff" };
    color: ${ props.filled ? "#fff" : "var(--lightBlue)" };
    border-radius: 3px;
`