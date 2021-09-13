import { useContext, useEffect } from 'react';

import GlobalContext from '../../../../components/contexts/global';
import HabitsContext from '../../../../components/contexts/habits';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import { SectionTitle } from '../../../../components/sharedStyles';
import { MainContentContainer } from '../SharedStyles';
import { SectionSubTitle } from './style.js';
import TodayHabitCard from '../TodayHabitCard';

function Today() {
    const { userData } = useContext(GlobalContext);
    const { todaysHabits,
            doneAmmount,
            setDoneAmmount,
            updateHabitsData } = useContext(HabitsContext);
    
    const dias = [
        "Domingo", "Segunda", "Terça", "Quarta",
        "Quinta", "Sexta", "Sábado"
    ]

    useEffect(() => {
        updateHabitsData();
    }, [])

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
                                            ID={habit.id} />
                        )
                    })
                }
            </MainContentContainer>
            <Header profilePic={userData?.image}/>
            <Footer />
        </>
    )
}

export default Today;