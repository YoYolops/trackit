import styled from "styled-components";

export const TodayHabitCardContainer = styled.div`
    width: 340px;
    height: 94px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5px 20px 20px;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    background-color: #fff;

    .info {
        font-size: 12px;
        margin-top: 5px;
    }
`

export const TodayHabitCardTitle = styled.p`
    color: #666666;
    font-size: 22px;
    margin-bottom: 10px;
`

export const Span = styled.span`
    color: ${props => props.color};
`