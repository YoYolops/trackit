import { useContext, useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';

import GlobalContext from '../../../../components/contexts/global';
import Habits from '../../../../services/habitsManager';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import Loading from '../../../../components/Loading';
import RegisterHabitCard from '../RegisterHabitCard';
import MyHabitCard from '../MyHabitCard';

import { SectionTitle, Button } from '../../../../components/sharedStyles';
import { AddHabitMenu } from './style.js';
import { MainContentContainer } from '../SharedStyles';

function HabitsView() {
    const { userData } = useContext(GlobalContext);

    const [ isLoading, setIsLoading ] = useState(true);
    const [ userHabits, setUserHabits ] = useState([]);
    const [ showRegisterHabitCard, setShowRegisterHabitCard ] = useState(false);
    const [ habitData, setHabitData ] = useState({
        name: "",
        days: []
    });

    useEffect(() => {
        let unmounted = false;

        async function getHabits() {
            const loadedHabits = await Habits.listHabits(userData.token);
            if(!unmounted && loadedHabits) setUserHabits(loadedHabits);
            else if(!loadedHabits) alert("Desculpe, nossos bits estão pausador pro lanche")
            if(isLoading && !unmounted) setIsLoading(false)
        }
        if(userData && !unmounted) getHabits();
        else if(!userData) window.location.href = "/";

        return () => { unmounted = true }
    }, [userData, isLoading]) //isLoading ensures the re-render after habit registration


    async function sendNewHabit() {
        setIsLoading(true);

        if(habitData.name.trim() === "" || habitData.days.length === 0) {
            alert("Você precisa inserir dados válidos")
        } else {
            console.log("habitData:", habitData);
            const response = await Habits.createHabit(habitData, userData.token);
            if(!response) alert("Desculpe, tivemos um problema :(")
        }
        setIsLoading(false);
        setHabitData({
            name: "",
            days: []
        })
        setShowRegisterHabitCard(false)
    }


    async function removeHabit(ID) {
        setIsLoading(true)
        const response = await Habits.deleteHabit(ID, userData.token);
        if(!response) alert("Desculpe, nossos servidores estão de férias")
        setIsLoading(false)
    }
    
    if(!userData) return <Loading />

    return (
        <>
            <MainContentContainer>
                <AddHabitMenu>
                    <SectionTitle>Meus Hábitos</SectionTitle>
                    <Button filled={true}
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
                        ? <RegisterHabitCard habitData={habitData}
                                             setHabitData={setHabitData}
                                             closeCard={setShowRegisterHabitCard}
                                             sendNewHabit={sendNewHabit}
                                             isLoading={isLoading} />
                        : null
                }

                {
                    userHabits.map(item => (
                        <MyHabitCard habitData={item}
                                     removeHabit={removeHabit}
                                     key={item.id}/>
                    ))
                }

                {
                    !isLoading && userHabits.length === 0
                        ? <p className="warningText">Você não tem nenhuma hábito cadastrado ainda, adicione um hábito para começar a trackear!</p>
                        : null
                }
            </MainContentContainer>
            <Footer />
            <Header profilePic={userData?.image} />
        </>
    )
}

export default HabitsView;