import { useContext, useState } from 'react';
import { AiFillCheckSquare } from 'react-icons/ai';

import Habits from '../../../../services/habitsManager';
import GlobalContext from '../../../../components/contexts/global';
import HabitsContext from '../../../../components/contexts/habits';

import { TodayHabitCardContainer,
         TodayHabitCardTitle,
         Span } from './style';

function TodayHabitCard({ isChecked,
                          title,
                          record,
                          streak,
                          ID }) 
{
    const [ isClicked, setIsClicked ] = useState(isChecked);
    const { userData } = useContext(GlobalContext);
    const [ updatedStreak, setUpdatedStreak ] = useState(streak);

    const { updateHabitsData } = useContext(HabitsContext);

    async function clickHandler() {
        let response;

        if(isClicked) {
            response = await Habits.markOffHabitAsDone(ID, userData.token);
            if(response) {
                setUpdatedStreak(updatedStreak - 1);
                updateHabitsData();
            }
        } else {
            response = await Habits.markHabitAsDone(ID, userData.token);
            if(response) {
                setUpdatedStreak(updatedStreak + 1);
                updateHabitsData("increase");
            }
        }

        if(!response) alert("Desculpe, tivemos um problema")
        else {
            setIsClicked(!isClicked);
        }
    }

    return (
        <TodayHabitCardContainer>
            <div>
                <TodayHabitCardTitle>{title}</TodayHabitCardTitle>
                <p className="info">
                    Sequência atual: <Span color={isClicked ? "#8FC549" : "#666666"}>
                                        {`${updatedStreak} dias`}
                                    </Span>
                </p>

                <p className="info">
                    Seu recorde: <Span color={record <= updatedStreak ? "#8FC549" : "#666666"}>{
                                    `${record < updatedStreak ? updatedStreak : record} dias`
                                 }</Span>
                </p>
            </div>
            <AiFillCheckSquare color={ isClicked ? "#8FC549" : "#E7E7E7" }
                               size={90}
                               onClick={clickHandler}/>
        </TodayHabitCardContainer>
    )
}

export default TodayHabitCard;