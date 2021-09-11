import styled from "styled-components";

export const MyHabitCardContainer = styled.div`
    width: 100%;
    border-radius: 5px;
    background-color: #fff;
    padding: 20px;
    position: relative;
    margin: 10px 0px;

    svg {
        position: absolute;
        right: 5px;
        top: 5px;

    }
`

export const HabitTitle = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
    color: #666666;
`

export const WeekDaysContainer = styled.div`
    display: flex;
`