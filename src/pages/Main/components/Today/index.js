import { useContext, useEffect, useState } from 'react';

import GlobalContext from '../../../../components/contexts/global';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import { SectionTitle } from '../../../../components/sharedStyles';
import { MainContentContainer } from '../SharedStyles';
import { SectionSubTitle } from './style.js';
import Habits from '../../../../services/habitsManager';
import TodayHabitCard from '../TodayHabitCard';

function Today() {
    const { userData } = useContext(GlobalContext);
    const dias = [
        "Domingo", "Segunda", "Terça", "Quarta",
        "Quinta", "Sexta", "Sábado"
    ]
    const [ todaysHabits, setTodaysHabits ] = useState([]);
    const [ doneAmmount, setDoneAmmount ] = useState(0)

    useEffect(() => {
        let unmounted = false;

        async function getTodaysHabits() {
            const response = await Habits.searchTodayHabits(userData.token);
            if(!unmounted && response) {
                let done = 0;
                for(const habit of response) { 
                    if(habit.done) done += 1;
                } 
                console.log(done)
                setDoneAmmount(done);
                setTodaysHabits(response);
            }
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

    function updateDoneAmmount(operation) {
        if(operation === "increase") setDoneAmmount(doneAmmount + 1);
        else setDoneAmmount(doneAmmount - 1);
    }

    return (
        <>
            <MainContentContainer>
                <SectionTitle>{ generateDate() }</SectionTitle>
                <SectionSubTitle color={doneAmmount === 0 ? null : "#8FC549"}>{
                    doneAmmount === 0
                        ? "Nenhum hábito concluído ainda"
                        : `${parseInt((100/todaysHabits.length)*doneAmmount)}% dos hábitos concluídos`
                }</SectionSubTitle>
                
                {
                    todaysHabits.map(habit => {
                        return (
                            <TodayHabitCard key={habit.id}
                                            title={habit.name}
                                            isChecked={habit.done}
                                            streak={habit.currentSequence}
                                            record={habit.highestSequence}
                                            ID={habit.id}
                                            updateDoneAmmount={updateDoneAmmount}/>
                        )
                    })
                }
            </MainContentContainer>
            <Header profilePic={userData?.image}/>
            <Footer percentage={(100/todaysHabits.length)*doneAmmount} />
        </>
    )
}

export default Today;