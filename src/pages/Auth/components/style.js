import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 80px 20px 0px 20px;
    justify-content: center;
    align-items: center;

    img {
        width: 180px;
        margin-bottom: 40px;
    }

    input {
        height: 45px;
        width: 303px;
        outline: none;
        border: 2px solid var(--lightGrey);
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 5px;
        font-size: 15px;
    }

    a {
        font-family: 'Lexend Deca', sans-serif;
        color: var(--lightBlue);
        border-bottom: 1px solid var(--lightBlue);
        font-size: 14px;
        margin-top: 20px;
    }
`