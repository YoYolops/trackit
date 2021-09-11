import styled from 'styled-components';

export const CardContainer = styled.div`
    padding: 20px;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 5px;

    input {
        margin-bottom: 10px;
        width: 100%;
        border: 2px solid #dbdbdb;
        background-color: #fff;
        border-radius: 5px;
        height: 45px;
        padding: 10px;
        font-size: 18px;
    }

    .weekdays {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 0px 0px 0px;
    gap: 0px 10px;
    margin-top: 20px;
`