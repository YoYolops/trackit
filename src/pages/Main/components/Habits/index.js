import { useContext, useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import GlobalContext from '../../../../components/contexts/global';
import { SectionTitle, Button } from '../../../../components/sharedStyles';
import { AddHabitMenu, MainContentContainer } from './style.js';
import Loading from '../../../../components/Loading';
import Habits from '../../../../services/habitsManager';
import RegisterHabitCard from '../RegisterHabitCard';

function HabitsView() {
    const { userData } = useContext(GlobalContext);

    const [ isLoading, setIsLoading ] = useState(false);
    const [ userHabits, setUserHabits ] = useState([]);
    const [ showRegisterHabitCard, setShowRegisterHabitCard ] = useState(false);

    useEffect(() => {
        async function getHabits() {
            const loadedHabits = await Habits.listHabits(userData.token);
            setUserHabits(loadedHabits);
        }
        if(userData) getHabits();
    }, [userData])
    
    if(!userData) return <Loading />

    return (
        <>
            <Header profilePic={userData.image} />
            <MainContentContainer>
                <AddHabitMenu>
                    <SectionTitle>Meus Hábitos</SectionTitle>
                    <Button
                        filled={true}
                        width="40px"
                        height="35px"
                        isLoading={isLoading}
                        onClick={() => {setShowRegisterHabitCard(!showRegisterHabitCard)}}
                    >
                        <FaPlus color="#fff" size={20} />
                    </Button>
                </AddHabitMenu>
                {
                    showRegisterHabitCard
                        ? <RegisterHabitCard />
                        : null
                }

                {
                    userHabits.map(() => <p>oi</p>)
                }

                {
                    !isLoading && userHabits.length === 0
                        ? <p className="warningText">Você não tem nenhuma hábito cadastrado ainda, adicione um hábito para começar a trackear!</p>
                        : null
                }
            </MainContentContainer>
            <Footer percentage={30} />
        </>
    )
}

export default HabitsView;