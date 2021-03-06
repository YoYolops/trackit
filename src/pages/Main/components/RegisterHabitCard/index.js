import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { CardContainer, ButtonContainer } from './style';
import { Button } from '../../../../components/sharedStyles/index';
import DaySelector from '../../../../components/DaySelector';

function RegisterHabitCard({ closeCard,
                             habitData,
                             setHabitData,
                             sendNewHabit,
                             isLoading })

{
    const weekDays = [ "D", "S", "T", "Q", "Q", "S", "S" ];

    function addWeekDay(day) {
        const newDays = Array.from(habitData.days);
        newDays.push(day);
        setHabitData({
            name: habitData.name,
            days: newDays
        })
    }

    function removeWeekDay(day) {
        const newDays = habitData.days.filter(value => value !== day);
        setHabitData({
            name: habitData.name,
            days: Array.from(newDays)
        })
    }

    return (
        <CardContainer>
            <input
                disabled={isLoading}
                placeholder="nome do hábito"
                value={habitData.name}
                onChange={e => setHabitData({
                    name: e.target.value,
                    days: habitData.days
                })}
            />

            <div className="weekdays">
                {
                    weekDays.map((day, index) => (
                        <DaySelector
                            text={day}
                            addWeekDay={addWeekDay}
                            removeWeekDay={removeWeekDay}
                            thisWeekDay={index}
                            key={index}
                            selected={habitData.days.includes(index)}
                        />
                    ))
                }
            </div>

            <ButtonContainer>
                <Button
                    width="84px"
                    height="35px"
                    filled={false}
                    onClick={() => { closeCard(false) }}
                    disabled={isLoading}
                >Cancelar</Button>

                <Button
                    width="84px"
                    height="35px"
                    filled={true}
                    onClick={sendNewHabit}
                    disabled={isLoading}
                    isLoading={isLoading}
                >{
                    isLoading
                        ? <Loader className="loadingIco"
                                  type="ThreeDots"
                                  color="#ffffff"
                                  height={10}  />
                        : "Salvar"
                }</Button>
            </ButtonContainer>
        </CardContainer>
    )
}

export default RegisterHabitCard;