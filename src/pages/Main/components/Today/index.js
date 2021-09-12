import { useContext, useEffect, useState } from 'react';

import GlobalContext from '../../../../components/contexts/global';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import { SectionTitle } from '../../../../components/sharedStyles';
import { MainContentContainer } from '../SharedStyles';
import { SectionSubTitle } from './style.js';
import Habits from '../../../../services/habitsManager';

function Today() {
    const { userData } = useContext(GlobalContext);
    const dias = [
        "Domingo", "Segunda", "Terça", "Quarta",
        "Quinta", "Sexta", "Sábado"
    ]
    console.log("userData: ",userData)
    const [ todaysHabits, setTodaysHabits ] = useState([]);

    useEffect(() => {
        let unmounted = false;

        async function getTodaysHabits() {
            const response = await Habits.searchTodayHabits(userData.token);
            if(!unmounted && response) setTodaysHabits(response);
        }
        if(!unmounted && userData) getTodaysHabits();

        return () => { unmounted = true };
    }, [userData])



    function generateDate() {
        const date = new Date();
        const weekDay = dias[date.getDay()];
        const monthDay = date.getDate();
        let month = `${date.getMonth()}`

        if(month.length === 1) month = "0" + month;

        return `${weekDay}, ${monthDay}/${month}`
    }

    return (
        <>
            <MainContentContainer>
                <SectionTitle>{ generateDate() }</SectionTitle>
                <SectionSubTitle></SectionSubTitle>
            </MainContentContainer>
            <Header profilePic={userData?.image}/>
            <Footer />
        </>
    )
}

export default Today;