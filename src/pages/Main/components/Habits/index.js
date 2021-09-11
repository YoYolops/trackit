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
import MyHabitCard from '../MyHabitCard';

function HabitsView() {
    const { userData } = useContext(GlobalContext);

    const [ isLoading, setIsLoading ] = useState(false);
    const [ userHabits, setUserHabits ] = useState([]);
    const [ showRegisterHabitCard, setShowRegisterHabitCard ] = useState(false);
    const [ habitData, setHabitData ] = useState({
        name: "",
        days: []
    });


    useEffect(() => {
        console.log("useEffect habits")
        async function getHabits() {
            const loadedHabits = await Habits.listHabits(userData.token);
            setUserHabits(loadedHabits);
        }
        if(userData) getHabits();
    }, [userData, isLoading]) //isLoading ensures the re-render after habit registration


    async function sendNewHabit() {
        setIsLoading(true);

        if(habitData.name.trim() === "" || habitData.days.length === 0) {
            alert("Você precisa inserir dados válidos")
        } else {
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
        console.log("removing")
        setIsLoading(true)
        const response = await Habits.deleteHabit(ID, userData.token);
        console.log(response)
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
                                             sendNewHabit={sendNewHabit}/>
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
            <Footer percentage={30} />
            <Header profilePic={userData.image} />
        </>
    )
}

export default HabitsView;